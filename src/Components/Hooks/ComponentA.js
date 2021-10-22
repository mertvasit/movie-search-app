import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
  const countContext = useContext(CountContext);

  return (
    <div>
      ComponentA:
      <button
        className="btn btn-primary m-2"
        onClick={() => countContext.countDispatch("increment1")}
      >
        increment1
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => countContext.countDispatch("decrement1")}
      >
        decrement1
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => countContext.countDispatch("reset")}
      >
        reset
      </button>
    </div>
  );
}

export default ComponentA;
