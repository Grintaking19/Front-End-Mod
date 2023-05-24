import styles from "./event-publish-card.module.css";

const EventPublishCard = (props) => {

  const checkImageURLorFile = (image) => {
    if (typeof(image) === "string") {
      return image;
    }
    else {
      return URL.createObjectURL(image);
    }
  }
  return (
    <div className={styles["event-publish-card"]}>
      <div className={styles["event-publish-card__image"]}>
        {
          props.image != ""  ?(
        <img src={checkImageURLorFile(props.image)} alt="event" width="100%" height="100%"/>
        ):(<div></div>)
        }
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
