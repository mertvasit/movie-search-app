import React, { useContext } from "react";
import { CountContext } from "../../App";

// const initialState = {
//   firstCounter: 0,
//   secondCounter: 10,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment1":
//       return { ...state, firstCounter: state.firstCounter + action.value };
//     case "decrement1":
//       return { ...state, firstCounter: state.firstCounter - action.value };
//     case "increment2":
//       return { ...state, secondCounter: state.secondCounter + action.value };
//     case "decrement2":
//       return { ...state, secondCounter: state.secondCounter - action.value };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function CounterTwo() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  const countContext = useContext(CountContext);

  return (
    <div>
      HooksTrail:
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

export default CounterTwo;
