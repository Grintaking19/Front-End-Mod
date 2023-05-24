import styles from "./browse-events.module.css";
import List from "./list/List";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import FiltersControlPanel from "./filters/FiltersControlPanel";
import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Component for the Browse Events page
 @component
 * @param {Object} props
 * @param {Function} getAllEvents - API call to get all events from the database
 * @param {Function} editEventsData - Function to save the events data in the state
 * @name BrowseEvents
 * 
* @example
 * editEventsData();
 * setEvents(response.data.data.events);
 */

const getAllEvents = async () => {
  let url = "https://hebtus.me/api/v1/events/?location=30.9820498,30.0352066&limit=100";
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };
  let response = await axios.get(url, config);
  return response;
};

const BrowseEvents = (props) => {
  const [events, setEvents] = useState([]);
  const editEventsData = async () => {
    const response = await getAllEvents();
    setEvents(response.data.data.events);
  };

  useEffect(() => {
    editEventsData();
  }, []);

  return (
    <div className={styles["__container"]}>
      <NavBar/>
      <div style={{"display":"flex", "flexDirection":"row"}}>
      <FiltersControlPanel></FiltersControlPanel>
      <List array={events}></List>
      </div>
    </div>
  );
};
export default BrowseEvents;
