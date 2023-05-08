import styles from "./filter-option.module.css";
const FiltersOption = (props) => {
  return (
    <div>
      <div className={styles["filtersOption"]}>
        <p> {props.children}</p>
      </div>
    </div>
  );
};

export default FiltersOption;
