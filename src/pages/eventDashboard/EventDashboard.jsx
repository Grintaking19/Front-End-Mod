import "./eventDashboard.css";
import CreatorSidenav from "../../layouts/creatorSidenav/CreatorSidenav";
import EventSidenav from "../../layouts/eventSidenav/EventSidenav";

function EventDashboard() {
    return (
        <div className="event-dashboard">
            <div className="navbar-k">
            </div>
            <CreatorSidenav />
            <EventSidenav />
            <div className="body-container">
                <div className="content-container">
                </div>
            </div>
        </div>
    );
}

export default EventDashboard;