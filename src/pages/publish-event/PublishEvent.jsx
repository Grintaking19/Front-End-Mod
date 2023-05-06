import styles from "./publish-event.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import EventPublishCard from "./event-publish-card/EventPublishCard";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import EventPrivacy from "./event-privacy/EventPrivacy";
import EventPublicDate from "./event-public-date/EventPublicDate";
import Footer from "../../layouts/UI/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const postRequest = async (bodyFormData, eventID) => {
  let url = "https://www.hebtus.me/api/v1/events/" + eventID;
  let data = bodyFormData;
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        localStorage.getItem("user") ,
      "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };
  let response = await axios.patch(url, data, config);
  console.log(response);
  return (response);
};

const PublishEvent = () => {
  const { state } = useLocation();
  const [eventPublishDetails, setEventPublishDetails] = useState({...state});
  console.log(eventPublishDetails.id);
  const privacyChangeHandler = (privacyRecieved) => {
    console.log(privacyRecieved);
    setEventPublishDetails({...eventPublishDetails, privacy: privacyRecieved})
  }

  const publicDateHandler = (dateRecieved) => {
    setEventPublishDetails({...eventPublishDetails, gopublicDate: dateRecieved})
  }

  const onSaveHandler = () => {
    const JSONbody ={
      "privacy": eventPublishDetails.privacy,
      "goPublicDate": eventPublishDetails.gopublicDate.toISOString()
    }
    console.log(eventPublishDetails.id);
    postRequest(JSONbody, eventPublishDetails.id);

  }

  return (
    <div>
      <NavBar />
      <div className={styles["container"]}>
        <EventSidenav eventName={eventPublishDetails.Title}  startDate={eventPublishDetails.startDate}  />
        <div className={styles["components"]}>
          <h1 className={styles["heading"]}>Publish Your Event</h1>
          <EventPublishCard
            title={eventPublishDetails.Title}
            date={eventPublishDetails.startDate}
            location={eventPublishDetails.location}
            image={eventPublishDetails.image}
          />
          <EventPrivacy onPrivacyChange={privacyChangeHandler}/>
          <EventPublicDate onChange={publicDateHandler} />
        </div>
      </div>
      <Footer onSave={onSaveHandler} />
    </div>
  );
};

export default PublishEvent;
