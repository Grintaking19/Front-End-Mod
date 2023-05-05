import styles from "./event-details.module.css"
import Panel from "../../layouts/UI/Panel";
import { EventMedia } from "../../layouts/UI/SvgImages";
import UploadImages from "./upload-images/UploadImages";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
const EventDetails = () => {

    return(
        <div className={styles["event-details"]}>  
            <EventSidenav />
            <Panel image={EventMedia} title="Event media" description="Upload images">
            <UploadImages />
            </Panel>

        </div>
    )
}

export default EventDetails;