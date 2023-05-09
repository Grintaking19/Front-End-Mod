import styles from "./Dropdown.module.css";

import React from "react";

const Dropdown = (props) => {

    return (
        <select disabled={props.disable} className={styles["dropdown"]} style={{ width: props.width }} onChange={props.onChange} id={`select-${props.id}`}>
            {
                props.options.map((option, index) => {
                    return (
                        <option key={option} value={option} id={`option-${props.id}-${index}`} disabled={index === 0}>
                            {option}
                        </option>
                    );
                })
            }
        </select>
    );
};

export default Dropdown;
