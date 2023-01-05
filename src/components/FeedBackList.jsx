import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";
import Snipper from "./shared/Snipper";

function FeedBackList() {
  const { feedBack, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedBack || feedBack.lenght === 0)) {
    return <p>No FeedBack Yet</p>;
  }

  return isLoading ? (
    <Snipper />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedBack.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedBackList;
