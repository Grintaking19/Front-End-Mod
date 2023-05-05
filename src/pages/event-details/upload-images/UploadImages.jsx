import styles from "./upload-images.module.css";
import Button from "../../../layouts/UI/Button";
import Panel from "../../../layouts/UI/Panel";
import { EventMedia } from "../../../layouts/UI/SvgImages";
import { useRef, useState } from "react";

const UploadImages = () => {
  let ButtonStyle = { marginTop: "10px", width: "30%", alignSelf: "center" };
  const uplaodImageRef = useRef();
  const [eventImage, setEventImage] = useState("");
  const [eventImagePreview, setEventImagePreview] = useState(0);

  const ChooseImageHandler = () => {
    uplaodImageRef.current.click();
    console.log(uplaodImageRef);
  };

  const SaveImageHandler = () => {
    setEventImage(uplaodImageRef.current.files[0]);
    setEventImagePreview(1);
  };

  const RemoveImageHandler = () => {
    setEventImage("");
    setEventImagePreview(0);
  };

  return (
    <div className="upload-image-wrapper">
    <Panel image={EventMedia} title="Event media" description="Upload images">
      {eventImagePreview == 0 ? (
        <div>
          <div className={styles["upload-image-div"]}>
            {EventMedia()}
            <Button style={ButtonStyle} onClick={ChooseImageHandler}>
              Upload Image
            </Button>
            <input
              type="file"
              ref={uplaodImageRef}
              onChange={SaveImageHandler}
              hidden
            />
          </div>
          <div className={styles["image-recommended"]}>
            <span> Recommended   size: 2160 x 1080px </span>
            <span> Maximum size: 10MB </span>
            <span> Supported image files: JPEG or PNG </span>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles["upload-image-div"]}>
            <img
              className={styles["image"]}
              src={URL.createObjectURL(eventImage)}
              alt="event-image"
            />
          </div>
          <Button style={ButtonStyle} onClick={RemoveImageHandler}>
            Remove
          </Button>
        </div>
      )}
    </Panel>
    </div>
  );
};

export default UploadImages;
