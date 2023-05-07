import styles from "./location-search-bar.module.css";

function LocationSearchbar() {
  return(
    <input id = "LocationSearchbar" className={styles["LocationSearchbar"]} type ="text" placeholder="Search by Location!"></input>
  );
}

export default LocationSearchbar;
