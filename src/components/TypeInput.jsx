import React from "react";

const TypeInput = () => {
  return (
    <div>
      <label>Type:</label>
      <select>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / False</option>
      </select>
    </div>
  );
};

export default TypeInput;
