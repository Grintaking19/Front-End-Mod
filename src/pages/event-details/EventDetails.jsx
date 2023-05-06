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

const EventDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();  
  const [eventDetails, setEventDetails] = useState(state);

  const saveUploadedImage = (imageReceived) => {
    setEventDetails({...eventDetails, image: imageReceived})
  }

  const saveUploadedDescription = (descriptionReceived) => {
    setEventDetails({...eventDetails, description: descriptionReceived})
  }

  const onSaveHandler = () => {
    navigate("/publish-event", { state: eventDetails });
  }

  return (
    <div>
      <NavBar />

      <div className={styles["conatiner"]}>
        <EventSidenav />
        <div className={styles["event-details"]}>
          <UploadImages onChange={saveUploadedImage}/>
          <Divder />
          <UploadDescription onChange={saveUploadedDescription} />

        </div>
      </div>
      <Footer onSave={onSaveHandler} />

    </div>
  );
};

export default EventDetails;
