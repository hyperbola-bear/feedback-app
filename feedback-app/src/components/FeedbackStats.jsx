import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// const average = Math.round(
//     feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
//   )

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  const avgFeedbackRating = Math.round(
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>average rating:{isNaN(avgFeedbackRating) ? 0 : avgFeedbackRating}</h4>
    </div>
  );
};

export default FeedbackStats;
