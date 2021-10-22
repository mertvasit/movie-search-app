import React from "react";
import LoadingGif from "../spinner.gif";

function Loading() {
  return (
    <div className="spinner text-center">
      <img src={LoadingGif} alt="loading..." />
    </div>
  );
}

export default Loading;
