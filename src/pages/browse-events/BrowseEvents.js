import styles from "./browse-events.module.css";
import List from "./list/List";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import FiltersControlPanel from "./filters/FiltersControlPanel";
import axios from "axios";
import { useEffect, useState } from "react";

const getAllEvents = async () => {
  let url = "https://www.hebtus.me/api/v1/events";
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
