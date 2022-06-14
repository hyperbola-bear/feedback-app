import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "this item number 2",
      rating: 6,
    },
  ]);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? updItem : item)));
  };

  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback, //state
        deleteFeedback,
        addFeedback,
        editFeedback, //function
        updateFeedback,
        feedbackEdit, // state
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
