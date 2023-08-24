import React, { useState } from "react";
import "./TextArea.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const Change = (event) => {
    setText(event.target.value);
  };

  const UpperCase = () => {
    setText(text.toUpperCase());
  };

  const LowerCase = () => {
    setText(text.toLowerCase());
  };

  const Clear = () => {
    setText("");
  };

  const Copy = () => {
    var text = document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
    notify();
  };
  const notify = () => toast("Copied To Clipboard");

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  let words = text.split(" ");
  let clean = words.filter((e) => e !== "");

  return (
    <>
      <center className="text">
        <div className="form-floating mb-3 color">
          <div>
            <div>
              <label htmlFor="floatingTextarea2">
                <h1>Enter your text here...</h1>
              </label>
              <textarea
                className="textArea"
                placeholder="Type/Paste your text here :)"
                id="floatingTextarea2"
                value={text}
                onChange={Change}
              ></textarea>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={UpperCase}
              >
                Covert To Upper Case
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={LowerCase}
              >
                Covert To Lower Case
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={Clear}
              >
                Clear All
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={Copy}
              >
                Copy All
                <ToastContainer />
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleExtraSpaces}
              >
                Remove Extra spaces
              </button>
            </div>
          </div>

          <h3>Text Summary</h3>
          <div>
            You have typed {clean.length} words using {text.length} characters.
          </div>
          <div>{(0.008 * clean.length).toFixed(2)} Minute read.</div>
        </div>
      </center>
    </>
  );
}
