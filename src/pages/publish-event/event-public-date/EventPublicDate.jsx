import styles from "./event-public-date.module.css";
import BasicDatePicker from "../../create-event/fields/BasicDatePicker";
import DatalistField from "../../create-event/fields/DatalistField";
import { TimeSlots } from "../../create-event/Data";
import { PM_24hoursConvert } from "../../create-event/date-and-time/DateTime";
import { useState } from "react";

const EventPublicDate = (props) => {
  let [goPublicDate, setGoPublicDate] = useState(new Date());
  let [goPublicHour, setgoPublicHour] = useState("7");
  let [goPublicMinute, setgoPublicMinute] = useState("0");
  const [nowOrLater, setNowOrLater] = useState(0);

  const DateChangeHandler = (event) => {
    goPublicDate = event.$d;
    goPublicDate.setUTCHours(goPublicHour);
    goPublicDate.setUTCMinutes(goPublicMinute);
    goPublicDate.setSeconds(0);
    setGoPublicDate(goPublicDate);
    if (nowOrLater == 0) props.onChange(goPublicDate)

  };

  const TimeChangeHandler = (event) => {
    let time = PM_24hoursConvert(event.target.textContent);
    setgoPublicHour(time[0]);
    setgoPublicMinute(time[1]);
    goPublicDate.setUTCHours(time[0]);
    goPublicDate.setUTCMinutes(time[1]);
    goPublicDate.setSeconds(0);
    setGoPublicDate(goPublicDate);
    if (nowOrLater == 0) props.onChange(goPublicDate)
  };


  return (
    <div className={styles["event-public-date"]}>
     
      <div className={styles["event-publicdate-calender"]}>
        <BasicDatePicker title={"Start Date"} onChange={DateChangeHandler}  value={null} />
        <DatalistField
          options={TimeSlots}
          title="Start Time"
          defaultValue="7:00 PM"
          id="start-time"
          onChange={TimeChangeHandler }
        />
      </div>
    </div>
  );
};

export default EventPublicDate;
