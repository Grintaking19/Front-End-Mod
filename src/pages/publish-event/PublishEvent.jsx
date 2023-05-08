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
import { useNavigate } from "react-router-dom";

const patchRequest = async (bodyFormData, eventID) => {
  let url = "https://www.hebtus.me/api/v1/events/" + eventID;
  let data = bodyFormData;
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };
  let response = await axios.patch(url, data, config);
  console.log(response);
  return response;
};

const PublishEvent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [eventPublishDetails, setEventPublishDetails] = useState({ ...state });



  const privacyChangeHandler = (privacyRecieved) => {
    console.log(privacyRecieved);
    setEventPublishDetails({
      ...eventPublishDetails,
      privacy: privacyRecieved,
    });
  };

  const publicDateHandler = (dateRecieved) => {
    setEventPublishDetails({
      ...eventPublishDetails,
      gopublicDate: dateRecieved,
    });
  };

  const onSaveHandler = () => {
    const JSONbody = {
      privacy: eventPublishDetails.privacy,
      goPublicDate: eventPublishDetails.gopublicDate.toISOString(),
    };
    console.log(eventPublishDetails.id);
    patchRequest(JSONbody, eventPublishDetails.id);
    setEventPublishDetails({ ...state, editOrCreate: "1" });
  };

  const onEditHandler = () => {
    const JSONbody = {
      privacy: eventPublishDetails.privacy,
    };
    console.log(eventPublishDetails.id);
    patchRequest(JSONbody, eventPublishDetails.id);
    setEventPublishDetails({ ...state, editOrCreate: "1" });
  }

  return (
    <div>
      <NavBar />
      <div className={styles["container"]}>
        <EventSidenav
          eventName={state.Title}
          startDate={state.startDate}
          eventCurrentInfo={eventPublishDetails}
        />
        <div className={styles["components"]}>
          <h1 className={styles["heading"]}>Publish Your Event</h1>
          <EventPublishCard
            title={state.Title}
            date={state.startDate}
            location={state.location}
            image={state.image}
          />
          <EventPrivacy onPrivacyChange={privacyChangeHandler} />
          {eventPublishDetails.editOrCreate == "0" && (
            <EventPublicDate onChange={publicDateHandler} />
          )}
        </div>
      </div>
      {(eventPublishDetails.editOrCreate == "0") ? (
           <Footer onSave={onSaveHandler} />
          ): (     <Footer onSave={onEditHandler} />)
          }
 
    </div>
  );
};

export default PublishEvent;
