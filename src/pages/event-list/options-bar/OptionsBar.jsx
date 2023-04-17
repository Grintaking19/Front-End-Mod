import styles from "./OptionsBar.module.css";
import Button from "../components/Button";
import ChoicesMenu from "../components/ChoicesMenu";

import { useNavigate } from "react-router-dom";

let Buttonstyles = {
  backgroundColor: "#d1410c",
  borderColor: "#d1410c",
  color: "#faece7",
  fontSize: "0.9rem",
  height: "2.5rem",
};



const OptionsBar = (props) => {
  const navigate = useNavigate();
  const onUserInputHandler = (event) => {
    props.onUserInput(event);
  };
  const onViewChangeHandler = (event) => {
    props.onViewChange(event);
  };
  return (
    <div className={styles["options-bar"]} id="options-bar">
      <div className={styles["right-options"]} id="right-options">
        <input
          className={styles["search-bar"]}
          placeholder="Search Events"
          onChange={onUserInputHandler}
          id="search-bar"
        />
        {/* <div className={styles["search-icon"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div> */}
        <ChoicesMenu onChange={onViewChangeHandler}></ChoicesMenu>
      </div>
      <Button style={Buttonstyles} id="create-event-button" onClick={() => navigate("/create-event")}> Create Event </Button>
    </div>
  );
};

export default OptionsBar;
