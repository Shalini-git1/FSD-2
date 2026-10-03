import React, { useState } from "react";

function HooksDemo() {
  // useState → creates state variable
  const [count, setCount] = useState(0);

  // Event to update state
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Understanding Hooks</h2>

      {/* Display state */}
      <h3>Count: {count}</h3>

      {/* Events */}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default HooksDemo;
