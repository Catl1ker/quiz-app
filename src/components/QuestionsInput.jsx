import React from "react";

const QuestionsInput = () => {
  return (
    <div>
      <label>Number of questions (5-15):</label>
      <input type="number" min="5" max="15" />
    </div>
  );
};

export default QuestionsInput;
