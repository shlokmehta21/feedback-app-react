import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import FeedbackContext from "../context/FeedBackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const { addFeedback, feedBackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedBackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
    }
  }, [feedBackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text Must Be atleast 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: rating,
      };

      if (feedBackEdit.edit === true) {
        updateFeedback(feedBackEdit.item.id, newFeedBack);
      } else {
        addFeedback(newFeedBack);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDiabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
