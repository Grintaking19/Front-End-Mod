import "./dropdown.css";
import React from "react";

const Dropdown = (props) => {


  return (
      <select className="dropdown" style={{width:props.width}} onChange={props.onChange}>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
  );
};

export default Dropdown;
