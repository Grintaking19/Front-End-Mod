import styles from "./publish-event.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import EventPublishCard from "./event-publish-card/EventPublishCard";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import EventPrivacy from "./event-privacy/EventPrivacy";

const PublishEvent = () => {
  return (
    <div >
      <NavBar />
      <div className={styles["container"]}>     
        <EventSidenav/>
        <EventPublishCard></EventPublishCard>
        <EventPrivacy/>
      </div>
    </div>
  );
};

export default PublishEvent;
