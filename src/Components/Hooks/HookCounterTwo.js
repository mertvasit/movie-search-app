import React, { useState, useEffect } from "react";
import HookCounter from "./HooksTrail";
import ComponentA from './ComponentA';

function HookCounterTwo(params) {
  // const initialCount = 0;
  // const [counter, setCounter] = useState(initialCount);
  // const [name, setName] = useState("");
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const logMousePosition = (e) => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  // useEffect(() => {
  //   console.log("useEffect - Updating document title");
  //   document.title = `Number ${counter}`;

  //   window.addEventListener("mousemove", logMousePosition);
  //   return () => {
  //     console.log("component unmount");
  //     window.removeEventListener("mousemove", logMousePosition);
  //   };
  // }, [counter]);

  // const handleFive = () => {
  //   for (let i = 0; i < 5; i++) {
  //     setCounter((prev) => prev + 1);
  //   }
  // };

  return (
    // <div>
    //   <div className="text-center">
    //     <span className="badge badge-primary my-5">
    //       <h1>Count: {counter}</h1>
    //     </span>
    //   </div>
    //   <div className="text-center">
    //     <button
    //       className="btn btn-primary m-2"
    //       onClick={() => {
    //         setCounter((prev) => prev + 1);
    //       }}
    //     >
    //       Increase
    //     </button>
    //     <button
    //       className="btn btn-warning m-2"
    //       onClick={() => {
    //         setCounter((prev) => prev - 1);
    //       }}
    //     >
    //       Decrease
    //     </button>
    //     <button
    //       className="btn btn-danger m-2"
    //       onClick={() => {
    //         setCounter(0);
    //       }}
    //     >
    //       Reset
    //     </button>
    //     <button className="btn btn-info m-2" onClick={handleFive}>
    //       Increase by 5
    //     </button>
    //     <br />
    //     <input
    //       type="text"
    //       value={name}
    //       className="form-control"
    //       onChange={(e) => setName(e.target.value)}
    //       style={{ width: "380px", marginLeft: "290px" }}
    //     />
    //   </div>
    //   <div className="text-center">
    //     <span>
    //       X - {x} / Y - {y}
    //     </span>
    //   </div>
    // </div>
    <div>
      <ComponentA />
    </div>
  );
}

export default HookCounterTwo;
