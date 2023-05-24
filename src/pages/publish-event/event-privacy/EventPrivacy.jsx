import styles from "./event-privacy.module.css";
import RadioButtonPanel from "../radio-buttons/RadioButtonPanel";

let privacyChoices = [
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
  const privacyChangeHandler = (event) => {
    //public 0, private 1
    if (event.target.id == "Private") props.onPrivacyChange(1);
    else if (event.target.id == "Public") props.onPrivacyChange(0);
  };
  return (
    <div className={styles["event-privacy"]}>
      <p className={styles["event-privacy-title"]}>Who can see your event?</p>

      <RadioButtonPanel
        inputArray={privacyChoices}
        onChange={privacyChangeHandler}
      />
    </div>
  );
};

export default EventPrivacy;
