import "./labeled-dropdown.css";

const LabeledDropdown = (props) => {
  return (
    <div className="labeled-dropdown-frame">
      <select className="labeled-dropdown" style={{ width: props.width }}>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="labeled-dropdown-title" > {props.title}</p>
    </div>
  );
};

export default LabeledDropdown;
