import "./FilterHeading.css";
const FilterHeading = (props) => {
  return (
    <div className="filterHeading" onClick={props.onClick}>
      <p> {props.children}</p>
    </div>
  );
};

export default FilterHeading;
