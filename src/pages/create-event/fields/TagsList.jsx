import styles from "./TagsList.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { HashIcon } from "../../../layouts/UI/SvgImages";

const TagsList = (props) => {
  let style;
  let inputStyle;
  const TagsValidation = () => {
    if (props.Tagslimit == true) {
      return <p> You can only choose 10 tags. </p>;
    } 
    
    else if  (props.CharsValid == false) {
      return <p> Only letters, numbers and underscores are allowed. </p>;
    }

    else if (props.AlreadyChoosen == true) {
      return <p> This tag is already choosen. </p>;
    }

    else if (props.AlreadyChoosen == false && props.Tagslimit == false) {
      return <p> {props.TagsCount} / 10 tags. </p>;
    }
  };

  const TagsStyleManiplator = () => {
    if (props.Tagslimit == true){
      inputStyle = {  border: "1px solid #c5162e !important", outline:"none !important"}
      return `${styles["tag-field-frame"]} ${styles["tag-field-error"]}`
    } 

    else if  (props.CharsValid == false) {
      inputStyle = {  border: "1px solid #c5162e !important", outline:"none !important"}
      return `${styles["tag-field-frame"]} ${styles["tag-field-error"]}`
    }

    else if (props.AlreadyChoosen == true){
      inputStyle = {  border: "1px solid #c5162e !important" , outline:"none !important"}
      return `${styles["tag-field-frame"]} ${styles["tag-field-error"]}`
    }

    else if (props.AlreadyChoosen == false && props.Tagslimit == false){}
      return `${styles["tag-field-frame"]}`
  };

  return (
    <div className={TagsStyleManiplator()}>
      <Autocomplete
        key={props.options.name}
        sx={{
          width: props.width,
          height: 10,
          backgroundColor: "white",
          margin: 0,
        }}
        options={props.options}
        disableClearable={true}
        popupIcon={""}
        onChange={props.onClick}
        onInputChange={props.onTextChange}
        renderOption={(props, option) => {
          return (
            <div key={option.name}>
              <Box
                key={option.name}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <div className={styles["tags-container"]} id={option.name}>
                  <div className={styles["hash-icon"]}> {HashIcon()}</div>
                  <div className={styles["tags-text-container"]}>
                    <div className={styles["tag-name"]} id={option.name}>
                      {option.name}
                    </div>
                    <div className={styles["tag-count"]} id={option.name}>
                      {option.count}
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          );
        }}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps, // must include otherwise it breaks
              value: props.textBoxValue,
              maxLength: 25,
            }}

            sx={inputStyle}
          />
        )}
      />
      <p className={styles["tag-field-title"]}> Press Enter to add a tag</p>
      <div className={styles["tag-field-warnings"]}>
        {TagsValidation()}
        <p> {props.textBoxValue.length} / 25 </p>
      </div>
    </div>
  );
};

export default TagsList;
