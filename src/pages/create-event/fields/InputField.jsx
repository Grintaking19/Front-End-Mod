import "./input-field.css";
import { useState, useRef, useEffect } from "react";

const InputField = (props) => {
  const [inputCount, setInputCount] = useState(0);
  const [rerender, setRerender] = useState(0);
  const TitleInputRef = useRef();
  const TitleInputWarningRef = useRef();

  let EventTitleClicked = 0;

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (e.target.className == "input-field") {
          EventTitleClicked = 1;
        }
        if (
          e.target.className != "input-field" &&
          TitleInputRef.current.value.length == 0 &&
          EventTitleClicked == 1
        ) {
          TitleInputRef.current.className = "input-field input-field-error";
        } else if (
          e.target.className != "input-field" &&
          TitleInputRef.current.value.length != 0 &&
          EventTitleClicked == 1
        ) {
          TitleInputRef.current.className = "input-field";
        }
      },
      true
    );
  }, []);

  const inputHandler = (e) => {
    setInputCount(e.target.value.length);
    props.onChange(e);
  };

  return (
    <div className="input-field-frame">
      <p className="input-field-title">
        {props.title} {props.required && "*"}
      </p>
      <input
        className="input-field"
        maxLength={75}
        onChange={inputHandler}
        ref={TitleInputRef}
      ></input>
      <span className="input-field-monitor">
        <div className="input-field-warning" ref={TitleInputWarningRef}>
          {" "}
        </div>
        <div>{inputCount}/75 </div>
      </span>
    </div>
  );
};

export default InputField;
