import styles from "./event-details.module.css";
import UploadImages from "./upload-images/UploadImages";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import UploadDescription from "./upload-description/UploadDescription";
import Divder from "../../layouts/UI/Divider";
import NavBar from "../../layouts/navbar/SignedInNavBar";

const EventDetails = () => {
  return (
    <div> 
            <NavBar/>


    <div className={styles["conatiner"]}>
      <EventSidenav />
      <div className={styles["event-details"]}>
        <UploadImages />
        <Divder />
        <UploadDescription />
      </div>
    </div>
    </div>
  );
};

export default EventDetails;
