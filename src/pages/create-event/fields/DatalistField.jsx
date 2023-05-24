import  "./DatalistField.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const DatalistField = (props) => {
  return (
    <div className={"datalist-field-frame"} id={props.id} style={{ width: props.width }}>
      <Autocomplete
        popupIcon={""}
        options={props.options}
        renderInput={(params) => <TextField {...params} />}
        disableClearable={true}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        disabled={props.disabled}
      />
        <p className={"datalist-field-title"}> {props.title}</p>
    </div>
  );
};

export default DatalistField;
