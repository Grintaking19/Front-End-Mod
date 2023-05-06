import styles from "./EventListContainer.module.css";
import PromoteEvent from "./promote-event/PromoteEvent";
import List from "./event-list/List";
import OptionsBar from "./options-bar/OptionsBar";
import { useState } from "react";
import NavBar from "../../layouts/navbar/NavBar";
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
    <div> 
          <NavBar/>

  <div className= {styles['event-list-container']} id="event-list-container">
    <h1 className={styles['header']} id="event-list-header"> Events</h1>
    <OptionsBar onViewChange={onViewChangeHandler} onUserInput={onUserInputHandler}/>
    <PromoteEvent />
    <List listView = {view} searchInput={userSearchinput}/>
  </div>
  </div>

  )
};

export default EventListConatiner;
