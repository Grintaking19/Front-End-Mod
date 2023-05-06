import styles from "./event-details.module.css";
import UploadImages from "./upload-images/UploadImages";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import UploadDescription from "./upload-description/UploadDescription";
import Divder from "../../layouts/UI/Divider";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import Footer from "../../layouts/UI/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const EventDetails = () => {
  const { state } = useLocation();  
  const [eventDetails, setEventDetails] = useState(state);

  const saveUploadedImage = (imageReceived) => {
    setEventDetails({...eventDetails, image: imageReceived})
  }

  const saveUploadedDescription = (descriptionReceived) => {
    setEventDetails({...eventDetails, description: descriptionReceived})
  }

  const onSaveHandler = () => {
    
  }

  return (
    <div>
      <NavBar />
      <Footer onSave={onSaveHandler} />

      <div className={styles["conatiner"]}>
        <EventSidenav />
        <div className={styles["event-details"]}>
          <UploadImages onChange={saveUploadedImage}/>
          <Divder />
          <UploadDescription onChange={saveUploadedDescription} />

        </div>
      </div>
    </div>
  );
};

export default EventDetails;
