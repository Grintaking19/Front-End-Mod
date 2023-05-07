import styles from "./filter-heading.module.css";
const FilterHeading = (props) => {
  return (
    <div className={styles["filterHeading"]} onClick={props.onClick}>
      <p> {props.children}</p>
    </div>
  );
};

export default FilterHeading;
