import "./eventDashboard.css";
import CreatorSidenav from "../../layouts/creatorSidenav/CreatorSidenav";
import EventSidenav from "../../layouts/eventSidenav/EventSidenav";
import CardsContainer from "./cardsContainer/CardsContainer";
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
                        <CardsContainer />
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