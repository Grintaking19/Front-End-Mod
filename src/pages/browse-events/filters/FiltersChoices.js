import styles from "./filters-choices.module.css";
import FiltersOption from "./FilterOption";
import Divider from "../UI/Divider";

const FiltersChoices = (props) => {
  return (
    <div className={styles["filtersDiv"]}>
      <Divider></Divider>
      {props.array.map((choice) => {
        return <FiltersOption>{choice}</FiltersOption>;
      })}
    </div>
  );
};

export default FiltersChoices;
