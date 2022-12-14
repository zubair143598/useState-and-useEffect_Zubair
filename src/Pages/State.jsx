import React, { useState } from "react";

function State() {
  const [count, setCount] =useState( 0);

  function incriment() {
    setCount(prevCount => prevCount+1);
  }

  function decriment() {
    setCount(prevCount => prevCount-1);
  }

  function reset()
{
  setCount(0)
}

  return (
    <div>
      <button className="btn" onClick={decriment}>-</button>
      <span>{count}</span>
      <button className="btn" onClick={incriment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default State;
