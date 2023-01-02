import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [feedBack, setFeedBack] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want to Delete?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedBack([newFeedback, ...feedBack]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedBackStats feedback={feedBack} />
        <FeedBackList feedback={feedBack} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
