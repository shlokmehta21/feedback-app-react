import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedBackList({ feedback, handleDelete }) {
  if (!feedback || feedback.lenght === 0) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedBackList;
