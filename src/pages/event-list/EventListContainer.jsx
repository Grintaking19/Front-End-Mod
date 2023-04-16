import styles from "./event-list-container.module.css";
import PromoteEvent from "./promote-event/PromoteEvent";
import List from "./event-list/List";
import OptionsBar from "./options-bar/OptionsBar";
import { useState } from "react";
const EventListConatiner = (props) => {

  const [view, setView] = useState("future");
  const [userSearchinput, setUserSearchInput] = useState("");

  const onViewChangeHandler = (event) => {
    setView(event.target.value);
  }

  const onUserInputHandler = (event) => {
    setUserSearchInput(event.target.value);
  }
  
  return(
  <div className= {styles['event-list-container']}>
    <h1 className={styles['header']}> Events</h1>
    <OptionsBar onViewChange={onViewChangeHandler} onUserInput={onUserInputHandler}/>
    <PromoteEvent />
    <List listView = {view} searchInput={userSearchinput}/>
  </div>
  )
};

export default EventListConatiner;
