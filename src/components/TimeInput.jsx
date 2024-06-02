import React from "react";

const TimeInput = () => {
  return (
    <div>
      <label>Time:</label>
      <select>
        <option value="1m">1 minute</option>
        <option value="2m">2 minutes</option>
        <option value="5m">5 minutes</option>
      </select>
    </div>
  );
};

export default TimeInput;
