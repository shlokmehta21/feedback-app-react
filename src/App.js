import React, { useState } from "react";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";

export default function App() {
  const [feedBack, setFeedBack] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want to Delete?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackStats feedback={feedBack} />
        <FeedBackList feedback={feedBack} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
