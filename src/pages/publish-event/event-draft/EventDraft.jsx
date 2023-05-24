import styles from "./../event-public-date/event-public-date.module.css";
import BasicDatePicker from "../../create-event/fields/BasicDatePicker";
import DatalistField from "../../create-event/fields/DatalistField";
import { TimeSlots } from "../../create-event/Data";
import { PM_24hoursConvert } from "../../create-event/date-and-time/DateTime";
import { useState } from "react";

const EventDraft = (props) => {
  const onDraftChageHandler = (e) => {
    props.onClick(e.target.id);
  };

  return (
    <div>
      <p className={styles["event-public-date-title"]}>
        When should we publish your event?
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
        }}
      >
        <input
          id="0"
          className={styles["event-publicdate-radiobutton"]}
          type="radio"
          name="public-date"
          onChange={onDraftChageHandler}
        />
        <span className={styles["event-publicdate-title"]}>Publish Now</span>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          id="1"
          className={styles["event-publicdate-radiobutton"]}
          type="radio"
          name="public-date"
          onChange={onDraftChageHandler}
        />
        <span className={styles["event-publicdate-title"]}>Publish later</span>
      </div>

    </div>
  );
};

export default EventDraft;
