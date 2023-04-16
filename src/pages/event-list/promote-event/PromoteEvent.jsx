import styles from "./promote-event.module.css";
import { PromoteImage } from "../../../utlis/SVGImages"
const PromoteEvent = () => {
  return (
    <div className={styles["promote-event"]}>
      <div className={styles["promote-image"]}>

        {PromoteImage()}
      </div>
      <div className={styles["promote-text"]}>
        <h4>Put your event in front of more people with Boost</h4>
        <p className={styles["promote-event-name"]}>Event Name</p>
      </div>
      <div className={styles["promote-button"]}>
      <div className={styles["promote-buuton-like"]}>Promote This Event</div>


      </div>

    </div>
  );
};

export default PromoteEvent;
