import { useState } from "react";

function SandBox({ width, height, left, top }) {  //<= 최종적으로 움직여지게될 박스
  const boxstyle = {
    width: `${width}px`,
    height: `${height}px`,
    left: `${left}px`,
    top: `${top}px`,
    position: "absolute",
    background: "brown",
  };

  return <div style={boxstyle}></div>;
}

export default SandBox;