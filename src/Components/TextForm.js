import React, { useState } from "react";

export default function (props) {
  const [text, setText] = useState("");

  // Convert To Upper Case
  const handleUpClick = () => {
    // console.log("Uppercase Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  // Convert To Lower Case
  const handleLowClick = () => {
    // console.log("Uppercase Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  // Handle Changes on text Area
  const handleOnChange = (e) => {
    // console.log("onchange");
    setText(e.target.value);
  };

  //Clear Text
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  // Copy Text
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  // Handle Extra Spaces
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h1>
          <textarea className="form-control" value={text} id="myBox" rows="3" style={{
            backgroundColor: props.mode === "light" ? "white" : "#ab6a8a",
            color: props.mode === "light" ? "black" : "white"
          }} onChange={handleOnChange}>
          </textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2> Your Text Summary </h2>
        <p> {text.split(" ").filter((n) => { return n !== ""; }).length} Words and {text.length} Characters </p>
        <p> {0.008 * text.split(" ").length} Minutes to read </p>
        <h2> Preview </h2>
        <p> {text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
