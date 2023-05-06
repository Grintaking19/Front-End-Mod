import styles from "./event-privacy.module.css";
import RadioButtonPanel from "../radio-buttons/RadioButtonPanel";

let inputArray = [
  {
    title: "Public",
    description: "Shared on Eventbrite and search engines",
    name: "event-privacy",
  },
  {
    title: "Private",
    description: "Only available to a selected audience",
    name: "event-privacy",
  },
];

const EventPrivacy = (props) => {
  return (
    <div className={styles["event-privacy"]}>
      <p className={styles["event-privacy-title"]}>Who can see your event?</p>

      <RadioButtonPanel inputArray={inputArray} />
    </div>
  );
};

export default EventPrivacy;
