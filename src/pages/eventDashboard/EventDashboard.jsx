import "./eventDashboard.css";
import CreatorSidenav from "../../layouts/creatorSidenav/CreatorSidenav";
import EventSidenav from "../../layouts/eventSidenav/EventSidenav";
import Card from "./card/Card";
import Share from "./share/Share";
import TodoList from "./todoList/TodoList";
import ReportTable from "./reportTable/ReportTable";


function EventDashboard() {
    let ticketTypeData = [["General Admission", "$10.00", "0/20"], ["VIP", "$20.00", "0/20"], ["VVIP", "$30.00", "0/20"]];
    let salesTableProps = {
        reportType: "tickets",
        title: "Sales by ticket type",
        tableHeaders: ["Ticket type", "Quantity", "Sold"],
        tableRows: ticketTypeData
    }

    let ordersData = [["1", "John Doe", "2", "$20.00", "2021-01-01"], ["2", "Jane Doe", "1", "$10.00", "2021-01-01"]];
    let ordersTableProps = {
        reportType: "orders",
        title: "Recent orders",
        tableHeaders: ["Order #", "Name", "Quantity", "Price", "Date"],
        tableRows: ordersData
    }

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
                    </div>
                    <div className="divider">
                        <hr />
                    </div>
                    <div className="stats-container">
                        <div className="ds-sales-container">
                            <ReportTable {...salesTableProps} />
                        </div>                            
                        <div className="ds-orders-container">
                            <ReportTable {...ordersTableProps} />
                        </div>
                        <div className="ds-other-actions-container">
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDashboard;