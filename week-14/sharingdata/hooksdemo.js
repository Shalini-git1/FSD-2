import React, { useState } from "react";
import Display from "./Display";

function HooksDemo() {
  // State in parent
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sharing Data Between Components (Hooks)</h2>

      {/* Parent UI */}
      <h3>Parent Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      {/* Sharing data with child */}
      <Display count={count} />
    </div>
  );
}

export default HooksDemo;
