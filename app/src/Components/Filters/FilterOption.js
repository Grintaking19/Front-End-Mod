import "./FilterOption.css";
const FiltersOption = (props) => {
  return (
    <div>
      <div className="filtersOption">
        <p> {props.children}</p>
      </div>
    </div>
  );
};

export default FiltersOption;
