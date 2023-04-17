import styles from "./DatalistField.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const DatalistField = (props) => {
  return (
    <div className={styles["datalist-field-frame"]}>
      <Autocomplete
        sx={{ width: props.width }}
        popupIcon={""}
        options={props.options}
        renderInput={(params) => <TextField {...params} />}
        disableClearable={true}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
        <p className={styles["datalist-field-title"]}> {props.title}</p>
    </div>
  );
};

export default DatalistField;
