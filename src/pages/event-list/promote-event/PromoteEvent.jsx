import styles from "./PromoteEvent.module.css";
import { PromoteImage } from "../../../utils/SVGImages"
const PromoteEvent = () => {
  return (
    <div className={styles["promote-event"]} id="promote-event">
      <div className={styles["promote-image"]} id="promote-image">

        {PromoteImage()}
      </div>
      <div className={styles["promote-text"]} id="promote-text">
        <h4 id="promote-text-content">Put your event in front of more people with Boost</h4>
        <p className={styles["promote-event-name"]} id="promote-event-name">Event Name</p>
      </div>
      <div className={styles["promote-button"]} id="promote-button">
      <div className={styles["promote-buuton-like"]} id="promote-button-like">Promote This Event</div>


      </div>

    </div>
  );
};

export default PromoteEvent;
