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

const postRequest = async (bodyFormData) => {
  let url = "https://www.hebtus.me/api/v1/events";
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
  let response = await axios.post(url, data, config);
  console.log(response);
};

const PublishEvent = () => {
  const { state } = useLocation();
  const [eventPublishDetails, setEventPublishDetails] = useState(state);
  console.log(eventPublishDetails);

  const privacyChangeHandler = (privacyRecieved) => {
    setEventPublishDetails({...eventPublishDetails, privacy: privacyRecieved})
  }

  const publicDateHandler = (dateRecieved) => {
    console.log(dateRecieved);

    setEventPublishDetails({...eventPublishDetails, gopublicDate: dateRecieved})
  }

  const onSaveHandler = () => {
    console.log(eventPublishDetails);
    console.log(localStorage.getItem("user"));
    const formData = new FormData();
    formData.append("name", eventPublishDetails.Title.toString());
    formData.append("startDate", eventPublishDetails.startDate);
    formData.append("endDate", eventPublishDetails.endDate);
    formData.append("location", "31.2107164, 30.0246686");
    formData.append("category", eventPublishDetails.Category);
    formData.append("tags", eventPublishDetails.choosenTag.toString());
    formData.append("privacy", eventPublishDetails.privacy);
    formData.append("image", eventPublishDetails.image);


    postRequest(formData);
  }
  return (
    <div>
      <NavBar />
      <div className={styles["container"]}>
        <EventSidenav />
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
