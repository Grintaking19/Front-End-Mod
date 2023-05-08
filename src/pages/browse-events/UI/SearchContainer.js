import styles from "./search-container.module.css";
import Searchbar from "./Searchbar";
import LocationSearchbar from "./LocationSearchbar";
import Divider from "../UI/Divider";

function SearchContainer(props) {
  const SearchInputHandler = (event) => {
    props.onChange(event);
  };

  return (
    <div id="SearchContainer" className={styles["SearchContainer"]}>
      <Searchbar onChange={SearchInputHandler}></Searchbar>
      <LocationSearchbar></LocationSearchbar>
      <Divider></Divider>
      <br />
    </div>
  );
}

export default SearchContainer;
