import { PropaneSharp } from "@mui/icons-material";
import styles from "./search-bar.module.css";


function Searchbar(props) {

    const SearchInputHandler = (event) => {
        props.onChange(event.target.value);
      };
      
  return (
    <input
      id="Searchbar"
      className={styles["Searchbar"]}
      type="text"
      placeholder="Search Anything!"
      onChange={SearchInputHandler}
    ></input>
  );
}

export default Searchbar;
