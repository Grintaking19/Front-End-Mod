import styles from "./EventListContainer.module.css";
import PromoteEvent from "./promote-event/PromoteEvent";
import List from "./event-list/List";
import OptionsBar from "./options-bar/OptionsBar";
import { useState } from "react";
import NavBar from "../../layouts/navbar/NavBar";
import Button from "../../layouts/UI/Button";
import axios from "axios";

/**
 * Component for the Event list paage
 * 
 * @component
 * @param {Fuction} onViewChangeHandler - Triggerd when the user chooses to shjow past or future events
 * @param {Function} downloadCSVHandler  - Triggerd when the user clicks on csv donwload button
 * @param {Function} onUserInputHandler - Triggerd when the user make any input
 * @name EventListContainer
 * @example
 * <Button style={CSVButtonStyle} onClick={downloadCSVHandler}> Download CSV</Button>
 * @example
 * <OptionsBar onViewChange={onViewChangeHandler} onUserInput={onUserInputHandler}/>
 */


const getCSVRequest = async () => {
  let url = "https://www.hebtus.me/api/v1/creators/events/?page=1&limit=10&csv=true";
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };
  let response = await axios.get(url,config);
  return response;
};

const EventListConatiner = (props) => {

  const CSVButtonStyle = {"width":"15%", "marginBottom":"30px", "marginTop":"20px"}

  const [view, setView] = useState("future");
  const [userSearchinput, setUserSearchInput] = useState("");

  const onViewChangeHandler = (event) => {
    setView(event.target.value);
  }

  const onUserInputHandler = (event) => {
    setUserSearchInput(event.target.value);
  }

  const downloadCSVHandler = async ()  => {
    let response = await getCSVRequest();

    const blob = new Blob([response.data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Events.csv";
    link.href = url;
    link.click();
    console.log(response);

  }
  
  return(
    <div> 
          <NavBar/>

  <div className= {styles['event-list-container']} id="event-list-container">
    <h1 className={styles['header']} id="event-list-header"> Events</h1>
    <OptionsBar onViewChange={onViewChangeHandler} onUserInput={onUserInputHandler}/>
    <PromoteEvent />
    <List listView = {view} searchInput={userSearchinput}/>
    <Button style={CSVButtonStyle} onClick={downloadCSVHandler}> Download CSV</Button>
    
  </div>
  </div>

  )
};

export default EventListConatiner;
