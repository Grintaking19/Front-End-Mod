import styles from "./Dropdown.module.css";

import React from "react";

const Dropdown = (props) => {

console.log(props.value);
  if (props.value !== undefined) {
  }

  return (
      <select disabled={props.disable} className={styles["dropdown"]} style={{width:props.width}} onChange={props.onChange} id={`select-${props.id}`}>
        {
        props.value == undefined? 
        (
        props.options.map((option, index) => {
          return (
            <option key={option} value={option} id={`option-${props.id}-${index}`} >
              {option}
            </option>
          );
        })
        ):(
    
              <option key={props.value } value={props.value }  >
                {props.value }
              </option>
 
        )
        
      
      }
      </select>
  );
};

export default Dropdown;
