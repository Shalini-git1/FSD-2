import React, { useState, useEffect } from "react";

function App1() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date()); // Update every second
    }, 1000);

    return () => clearInterval(intervalId); // Clean up
  }, []);

  return (
    // ...
  );
}
