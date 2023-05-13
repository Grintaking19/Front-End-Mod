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
import EventDraft from "./event-draft/EventDraft";

/**
 * Component for the publish event page
 * @component
 * @param {Fuction} onEditHandler - Triggerd when the user make any edit to the event (patch request)
 * @param {Function} onSaveHandler  - Triggerd when the user saves the event
 * @param {Function} publicDateHandler - Triggerd when the user edits public date
 * @param {Function} privacyChangeHandler - Triggerd when the user changes privacy
 * @name PublishEvent

 * @example
 * <EventPublicDate onChange={publicDateHandler} />
 * @example
 * <EventPrivacy onPrivacyChange={privacyChangeHandler} />
 * @example
 * <Footer onSave={onSaveHandler} />

*/

const patchRequest = async (bodyFormData, eventID) => {
  console.log(bodyFormData);
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
  console.log(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { state } = useLocation();
  const [eventPublishDetails, setEventPublishDetails] = useState({
    ...state,
    goPublicDate: new Date(2050, 5),
    password: null,
    privacy: "1",
    draft: false
  });

  const privacyChangeHandler = (privacyRecieved) => {
    console.log(privacyRecieved);
    setEventPublishDetails({
      ...eventPublishDetails,
      privacy: privacyRecieved,
    });
  };

  const onDraftChangeHandler = (draftRecieved) => {
   let x;
    if (  draftRecieved == "1" ) x=true;
    else x=false;
console.log(x);
    setEventPublishDetails({
      ...eventPublishDetails,
      draft: x,
    });
  };

  const onPasswordChangeHandler = (e) => {
    setEventPublishDetails({
      ...eventPublishDetails,
      password: e.target.value,
    });
  };

  const publicDateHandler = (dateRecieved) => {
    setEventPublishDetails({
      ...eventPublishDetails,
      goPublicDate: dateRecieved,
    });
  };

  const onSaveHandler = () => {
    const JSONbody = {
      privacy: eventPublishDetails.privacy,
      goPublicDate: eventPublishDetails.goPublicDate.toISOString(),
      password: eventPublishDetails.password,
      draft: eventPublishDetails.draft
    };
    console.log(eventPublishDetails);
    patchRequest(JSONbody, eventPublishDetails.id);
    setEventPublishDetails({ ...state, editOrCreate: "1" });
  };

  const onEditHandler = () => {

    console.log(eventPublishDetails.draft);
    const JSONbody = {
      privacy: eventPublishDetails.privacy,
      draft: eventPublishDetails.draft,
      goPublicDate: eventPublishDetails.goPublicDate.toISOString(),
      password: eventPublishDetails.password
    };
    patchRequest(JSONbody, eventPublishDetails.id);
    setEventPublishDetails({ ...state, editOrCreate: "1" });
  };

  const renderPrivateChoices = (privacy) => {
    if (privacy == "1") {
      return (
        <div>
          <EventDraft onClick={onDraftChangeHandler} />
          <br />
          <label for="password" style={{ paddingRight: "10px" }}>
            Password:{" "}
          </label>
          <input
            name="password"
            type="input"
            placeholder="Password"
            onChange={onPasswordChangeHandler}
          />
          <EventPublicDate onChange={publicDateHandler} />
        </div>
      );
    }
    if (privacy == "0") {
      return (
        <div>
          <EventDraft onClick={onDraftChangeHandler} />
        </div>
      );
    }
  };

  return (
    <div>
      <NavBar />
      <div className={styles["container"]}>
        <EventSidenav
          eventName={state.Title}
          startDate={state.startDate}
          eventCurrentInfo={eventPublishDetails}
          activeTab="event-publish"
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

          {eventPublishDetails.editOrCreate == "1" && (
          renderPrivateChoices(eventPublishDetails.privacy)

          )}
          {eventPublishDetails.editOrCreate == "0" &&
            renderPrivateChoices(eventPublishDetails.privacy)}
        </div>
      </div>
      {eventPublishDetails.editOrCreate == "0" ? (
        <Footer onSave={onSaveHandler} />
      ) : (
        <Footer onSave={onEditHandler} />
      )}
    </div>
  );
};

export default PublishEvent;
