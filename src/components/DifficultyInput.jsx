import React from "react";

const DifficultyInput = () => {
  return (
    <div>
      <label>Difficulty:</label>
      <select>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultyInput;
