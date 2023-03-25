import "./FiltersChoices.css";
import FiltersOption from "./FilterOption";
import Divider from "../General/Divider";

const FiltersChoices = (props) => {
  return (
    <div className="filtersDiv">
      <Divider></Divider>
      {props.array.map((choice) => {
        return <FiltersOption>{choice}</FiltersOption>;
      })}
    </div>
  );
};

export default FiltersChoices;
