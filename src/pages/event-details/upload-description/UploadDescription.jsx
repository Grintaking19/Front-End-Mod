import styles from "./upload-description.css";
import Panel from "../../../layouts/UI/Panel";
import { EventDescription } from "../../../layouts/UI/SvgImages";
import { useState } from "react";

const UploadDescription = () => {
  const [eventDescription, setEventDescription] = useState("");
  const descriptionInputHandler = (event) => {
    setEventDescription(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={styles["upload-description"]}>
      <Panel
        title="Event description"
        description="Add more details to your event like your schedule, sponsors, or featured guests."
        image={EventDescription}
      >
        <div className={styles["description-div"]}>
          <textarea
            className={styles["description-textarea"]}
            onChange={descriptionInputHandler}
          />
        </div>
      </Panel>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default UploadDescription;
