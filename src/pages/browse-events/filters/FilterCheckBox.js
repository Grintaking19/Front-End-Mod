import styles from "./filter-check-box.module.css";

const FilterCheckBox = (props) => {
  return (
    <div className={styles["filterCheckBox--title"]}>
      <label className={styles["filterCheckBox--label"]} for="filtercheckbox1"> I have a bike</label>
      <input type="checkbox" id="filtercheckbox1" name="filtercheckbox1" value="" className={styles["styled-checkbox"]}/>
    </div>
  );
};

export default FilterCheckBox;
