import styles from "./event-public-date.module.css";
import BasicDatePicker from "../../create-event/fields/BasicDatePicker";
import DatalistField from "../../create-event/fields/DatalistField";
import { TimeSlots } from "../../create-event/Data";

const EventPublicDate = () => {
  return (
    <div className={styles["event-public-date"]}>
      <p className={styles["event-public-date-title"]}>
        When should we publish your event?
      </p>
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <input
          className={styles["event-publicdate-radiobutton"]}
          type="radio"
          name="public-date"
        />
        <span className={styles["event-publicdate-title"]}>Publish Now</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          className={styles["event-publicdate-radiobutton"]}
          type="radio"
          name="public-date"
        />
        <span className={styles["event-publicdate-title"]}>
          Schedule for later
        </span>
      </div>
      <div className={styles["event-publicdate-calender"]}>
        <BasicDatePicker title={"Start Date"} />
        <DatalistField
          options={TimeSlots}
          title="Start Time"
          defaultValue="7:00 PM"
          id="start-time"
        />
      </div>
      
    </div>
  );
};

export default EventPublicDate;
