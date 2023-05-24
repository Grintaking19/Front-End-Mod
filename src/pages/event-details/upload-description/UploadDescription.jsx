import styles from "./upload-description.css";
import Panel from "../../../layouts/UI/Panel";
import { EventDescription } from "../../../layouts/UI/SvgImages";

const UploadDescription = (props) => {
  const descriptionInputHandler = (event) => {
    props.onChange(event.target.value);
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
