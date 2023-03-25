import "./FilterCheckBox.css";

const FilterCheckBox = (props) => {
  return (
    <div className="filterCheckBox--title">
      <label className="filterCheckBox--label" for="filtercheckbox1"> I have a bike</label>
      <input type="checkbox" id="filtercheckbox1" name="filtercheckbox1" value="" className="styled-checkbox"/>
    </div>
  );
};

export default FilterCheckBox;
