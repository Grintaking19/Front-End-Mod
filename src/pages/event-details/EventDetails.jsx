import styles from "./event-details.module.css";
import UploadImages from "./upload-images/UploadImages";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import UploadDescription from "./upload-description/UploadDescription";
import Divder from "../../layouts/UI/Divider";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import Footer from "../../layouts/UI/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * Component for the Event Details oage
 * 
 * @component
 * @param {Fuction} saveUploadedImage - Triggerd when the user chooses iamge
 * @param {Function} saveUploadedDescription  - Triggerd when the user edits the event, to save the description
 * @param {Function} onEditHandler - Triggerd when the user edits the event
 * @param {Function} onSaveHandler - Triggerd when the user click on the button (save and continue)

 * @example
 * <UploadDescription onChange={saveUploadedDescription} />
 * @example
 *  <div className={styles["event-details"]}>
 * {
 * (state.id=="")&& <UploadImages onChange={saveUploadedImage} />}
 * <Divder />
 * <UploadDescription onChange={saveUploadedDescription} />
 * </div>
 * }
 */

const postRequest = async (JSONbody) => {
  let url = "https://www.hebtus.me/api/v1/events";
  let data = JSONbody;
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };
  let response = await axios.post(url, data, config);

  return (response.data.data.event._id);
};

const patchRequest = async (JSONbody, eventID) => {
  let url = "https://www.hebtus.me/api/v1/events/" + eventID;
  let data = JSONbody;
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };
  let response = await axios.patch(url, data, config);
  console.log(response);
};

const EventDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [eventDetails, setEventDetails] = useState({ ...state });

  const saveUploadedImage = (imageReceived) => {
    setEventDetails({ ...eventDetails, image: imageReceived });
  };

  const saveUploadedDescription = (descriptionReceived) => {
    setEventDetails({ ...eventDetails, description: descriptionReceived });
  };

  const onEditHandler = async () => {

      const jsonData={
        "description": eventDetails.description
      }
      await patchRequest(jsonData, eventDetails.id);
  }

  const onSaveHandler = async () => {
    const formData = new FormData();
    formData.append("name", eventDetails.Title);
    formData.append("startDate", eventDetails.startDate);
    formData.append("endDate", eventDetails.endDate);
    formData.append("location", "31.2064,30.1049");
    formData.append("category", eventDetails.Category);
    formData.append("tags", eventDetails.choosenTag.toString());
    formData.append("image", eventDetails.image);
    let eventId = await postRequest(formData);
    setEventDetails( {...eventDetails, id:eventId } );
    navigate(`/manage/events/${eventId}/tickets`, { state: {...eventDetails, id:eventId } });
  };

  return (
    <div>
      <NavBar />

      <div className={styles["conatiner"]}>
        <EventSidenav eventName={eventDetails.Title}  startDate={eventDetails.startDate} eventCurrentInfo={eventDetails}  activeTab="event-details"/>
        <div className={styles["event-details"]}>

          {
            (state.id=="")&& <UploadImages onChange={saveUploadedImage} />}
          <Divder />
          <UploadDescription onChange={saveUploadedDescription} />
        </div>
      </div>

      {
        state.id=="" ? (
        <Footer onSave={onSaveHandler} />):(

        <Footer onSave={onEditHandler} />
        )}
    </div>
  );
};

export default EventDetails;
