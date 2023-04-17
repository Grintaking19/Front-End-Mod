import styles from "./LabeledDropdown.module.css";

const LabeledDropdown = (props) => {
  return (
    <div className={styles["labeled-dropdown-frame"]} id={`labeled-dropdown-${props.id}`}>
      <select className={styles["labeled-dropdown"]} style={{ width: props.width }} id={`select-${props.id}`}>
        {props.options.map((option, index) => {
          return (
            <option key={option} value={option} id={`option-${props.id}-${index}`}>
              {option}
            </option>
          );
        })}
      </select>
      <p className={styles["labeled-dropdown-title"]} id={`labeled-dropdown-title-${props.id}`}> {props.title}</p>
    </div>
  );
};

export default LabeledDropdown;
