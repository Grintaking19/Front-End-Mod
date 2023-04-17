import styles from "./LabeledDropdown.module.css";

const LabeledDropdown = (props) => {
  return (
    <div className={styles["labeled-dropdown-frame"]}>
      <select className={styles["labeled-dropdown"]} style={{ width: props.width }}>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className={styles["labeled-dropdown-title"]} > {props.title}</p>
    </div>
  );
};

export default LabeledDropdown;
