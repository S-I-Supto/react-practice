import React, { useState } from "react";

export default function TextForm(props) {
  // for text listener
  let typingText = (event) => {
    console.log("clicked on the text bar");
    setText(event.target.value);
  };
  // for uppercase btn listener
  let handleUpClick = () => {
    console.log("you have clicked the button ");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.alertdefiner("congrats! converted to uppercase");
  };

  // for lowercase btn listener
  let handleDownCLick = () => {
    console.log("you have clicked the lower case btn");
    let newlowertext = text.toLowerCase();
    setText(newlowertext);
    props.alertdefiner("congrats! converted to LOWERCASE");
  };
  // to clear the text

  let clearText = (event) => {
    let noText = "";
    setText(noText);
    props.alertdefiner("CLEARED THE TEXT");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="form-floating mb-3 my-5">
        <input
          type="text"
          className="form-control  input-lg={value.toString()}."
          id="floatingInput"
          placeholder="name@example.com"
          value={text}
          onChange={typingText}
        />
        <div className="my-3  btn btn-danger " onClick={handleUpClick}>
          convert to uppercase
        </div>
        <div className="btn btn-success mx-2" onClick={handleDownCLick}>
          Convert to lower case
        </div>
        <div className="btn btn-outline-dark" onClick={clearText}>
          Clear the text
        </div>
      </div>
      <div className="container">
        <h1>Your text counter</h1>
        <div className="counter">
          <h5>
            you have {text.length} cahracters and {text.split(" ").length} words{" "}
          </h5>
          <h3>the text you wrote is:</h3>
          <p>
            {text.length > 0 ? text : "enter something here to preview here"}
          </p>
        </div>
      </div>
    </>
  );
}
