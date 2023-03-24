import "./eventDashboard.css";
import CreatorSidenav from "../../layouts/creatorSidenav/CreatorSidenav";
import EventSidenav from "../../layouts/eventSidenav/EventSidenav";
import Card from "./card/Card";
import Share from "./share/Share";
import TodoList from "./todoList/TodoList";


function EventDashboard() {
    return (
        <div className="event-dashboard">
            <div className="navbar-k">
            </div>
            <CreatorSidenav />
            <EventSidenav />
            <div className="body-container">
                <div className="content-container">
                    <div className="insights-container">
                        <div className="header">
                            <h1 className='title'>Dashboard</h1>
                        </div>
                        <div className="cards-container">
                            <Card />
                            <Card />
                        </div>
                        <TodoList />
                        <Share />
                        <div className="recommended-list">
                        </div>
                    </div>
                    <div className="stats-container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDashboard;