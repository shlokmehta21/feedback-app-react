import { v4 as uuidv4 } from "uuid";
const { createContext, useState } = require("react");

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBack, setFeedBack] = useState([
    {
      id: 1,
      text: "this item is from context 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this item is from context 2",
      rating: 8,
    },
    {
      id: 3,
      text: "this item is from context 3",
      rating: 6,
    },
  ]);

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedBack]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want to Delete?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedBack(
      feedBack.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
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
