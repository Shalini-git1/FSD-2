import React from "react";

function Display(props) {
  return (
    <div>
      {/* Receiving shared data via props */}
      <h3>Shared Count: {props.count}</h3>
    </div>
  );
}

export default Display;
