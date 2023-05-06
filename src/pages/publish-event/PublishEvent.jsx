import styles from "./publish-event.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import EventPublishCard from "./event-publish-card/EventPublishCard";
import NavBar from "../../layouts/navbar/SignedInNavBar";
import EventPrivacy from "./event-privacy/EventPrivacy";
import EventPublicDate from "./event-public-date/EventPublicDate";
import Footer from "../../layouts/UI/Footer";

const PublishEvent = () => {
  return (
    <div>
      <NavBar />
      <div className={styles["container"]}>
        <EventSidenav />
        <div className={styles["components"]}>
          <h1 className={styles["heading"]}>Publish Your Event</h1>
          <EventPublishCard />
          <EventPrivacy />
          <EventPublicDate />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublishEvent;
