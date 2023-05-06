import styles from "./event-publish-card.module.css";

const EventPublishCard = (props) => {
  return (
    <div className={styles["event-publish-card"]}>
      <div className={styles["event-publish-card__image"]}>
        <img src={"https://i.imgur.com/COfe2XG.jpeg"} alt="event" width="100%" height="100%"/>
      </div>
      <div className={styles["event-publish-card__details"]}>

        <span  className={styles["event-publish-card__title"]}> titile</span>
        <span  className={styles["event-publish-card__time"]}> Details</span>
        <span  className={styles["event-publish-card__location"]}> Date</span>
      </div>
    </div>
  );
};

export default EventPublishCard;
