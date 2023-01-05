const { createContext, useState, useEffect } = require("react");

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedBack, setFeedBack] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch("/feedback");

    const data = await response.json();

    setFeedBack(data);
    setIsLoading(false);
  };

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = response.json();

    setFeedBack([data, ...feedBack]);
  };

  // Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are You Sure You Want to Delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = response.json;

    setFeedBack(
      feedBack.map((item) =>
        item.id === id
          ? {
              ...item,
              ...data,
            }
          : item
      )
    );

    fetchFeedback();
  };

  // Edit Feedback
  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedBack,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedBack,
        feedBackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
