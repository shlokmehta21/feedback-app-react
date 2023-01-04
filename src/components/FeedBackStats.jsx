import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";

function FeedBackStats() {
  const { feedBack } = useContext(FeedbackContext);
  // Calculate Average
  let average =
    feedBack.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedBack.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedBack.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedBackStats;
