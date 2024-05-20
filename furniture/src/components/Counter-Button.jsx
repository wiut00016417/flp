import React, { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div className="counter-button">
      <button onClick={handleDecrement}>-</button>
      <span className="count">{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default CounterButton;
