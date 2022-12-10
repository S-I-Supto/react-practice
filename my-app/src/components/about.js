import React, { useState } from "react";

export default function About() {
  const [currentbg, updatedbg] = useState({
    backgroundColor: "red",
    width: "700px",
    height: "500px",
    margin: "auto",
  });
  let btncenter = {
    marginLeft: "auto",
    marginRight: "auto",
  };
  const [extraCurrentbg, extraUpdatedbg] = useState({
    backgroundColor: "blue",
  });
  const [currentTxt, upadatedTxt] = useState("make it blue");
  const [currentbtncolor, updatedbtncolor] = useState("btn btn-primary  my-5");
  let Currentbg = extraCurrentbg;
  let incident = () => {
    if (Currentbg.backgroundColor === "blue") {
      updatedbg({
        backgroundColor: "blue",
        width: "700px",
        height: "500px",
        margin: "auto",
      });
      upadatedTxt("make it red");
      updatedbtncolor("btn btn-danger  my-5");
      extraUpdatedbg({ backgroundColor: "red" });
    } else {
      updatedbg({
        backgroundColor: "red",
        width: "700px",
        height: "500px",
        margin: "auto",
      });
      upadatedTxt("make it blue");
      updatedbtncolor("btn btn-primary  my-5");
      extraUpdatedbg({ backgroundColor: "blue" });
    }
  };
  return (
    <>
      <div className="bg" style={currentbg}></div>
      <button
        type="button"
        style={btncenter}
        className={currentbtncolor}
        onClick={incident}
      >
        {currentTxt}
      </button>
    </>
  );
}
