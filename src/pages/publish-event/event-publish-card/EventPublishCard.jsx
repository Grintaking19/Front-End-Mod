import styles from "./event-publish-card.module.css";

const EventPublishCard = (props) => {
  return (
    <div className={styles["event-publish-card"]}>
      <div className={styles["event-publish-card__image"]}>
        <img src={URL.createObjectURL(props.image)} alt="event" width="100%" height="100%"/>
      </div>
      <div className={styles["event-publish-card__details"]}>

        <span  className={styles["event-publish-card__title"]}> {props.title}</span>
        <span  className={styles["event-publish-card__time"]}> {props.date}</span>
        <span  className={styles["event-publish-card__location"]}> {props.location}</span>
      </div>
    </div>
  );
};

export default EventPublishCard;
