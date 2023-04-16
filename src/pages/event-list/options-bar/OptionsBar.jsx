import styles from "./options-bar.module.css";
import Button from "../components/Button";
import ChoicesMenu from "../components/ChoicesMenu";
let Buttonstyles = {
  backgroundColor: "#d1410c",
  borderColor: "#d1410c",
  color: "#faece7",
  fontSize: "0.9rem",
  height: "2.5rem",
};



const OptionsBar = (props) => {
  const onUserInputHandler = (event) => {
    props.onUserInput(event);
  };
  const onViewChangeHandler = (event) => {
    props.onViewChange(event);
  };
  return (
    <div className={styles["options-bar"]}>
      <div className={styles["right-options"]}>
        <input
          className={styles["search-bar"]}
          placeholder="Search Events"
          onChange={onUserInputHandler}
        />
        <svg className={styles['svg']} x="10" y="10" viewBox="0 0 24 24">
          <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"></path>
        </svg>
        <ChoicesMenu onChange={onViewChangeHandler}></ChoicesMenu>
      </div>
      <Button style={Buttonstyles}> Create Event </Button>
    </div>
  );
};

export default OptionsBar;
