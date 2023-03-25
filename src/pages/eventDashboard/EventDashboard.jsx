import "./eventDashboard.css";
import EventSidenav from "../../layouts/eventSidenav/EventSidenav";
import Card from "./card/Card";
import Share from "./share/Share";
import ActionList from "./actionList/ActionList";
import ReportTable from "./reportTable/ReportTable";

import { useState, useEffect } from "react";

import { getTicketTypes, getBookings } from "./services";

function EventDashboard() {
    // TODO: Get event ID from URL
    let eventId = 1;

    const [ticketTypeData, setTicketTypeData] = useState([[]]);
    const [ordersData, setOrdersData] = useState([[]]);

    useEffect(() => {
        async function fetchData() {
            const ticketTypesData = await getTicketTypes(eventId);
            setTicketTypeData(ticketTypesData);
            const bookingsData = await getBookings(eventId);
            setOrdersData(bookingsData);
        }

        fetchData();
    }, []);

    

    let salesTableProps = {
        reportType: "tickets",
        title: "Sales by ticket type",
        tableHeaders: ["Ticket type", "Quantity", "Sold"],
        tableRows: ticketTypeData
    }

    let ordersTableProps = {
        reportType: "orders",
        title: "Recent orders",
        tableHeaders: ["Order #", "Name", "Quantity", "Price", "Date"],
        tableRows: ordersData
    }

    let ticketsSummaryCardProps = {
        title: "Tickets Sold",
        mainContent: "0",
        subMainContent: "/0",
        subContent: "0 paid • 0 free",
        footer: ""
    }

    let pageViewsCardProps = {
        title: "Page Views",
        mainContent: "0",
        subMainContent: "",
        subContent: "0 from Eventbrite",
        footer: ["Open ", <a href="#">page views report</a>]
    }

    let todoListProps = {
        title: "Your to-do list",
        taskItems: [
            {
                icon: [
                    <i>
                        <svg viewBox="0 0 24 24">
                            <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z">
                            </path>
                        </svg>
                    </i>
                ],
                content: "Your Event doesn't have any tickets",
                action: [<a href="#">Create tickets</a>]
            }
        ]
    }

    let otherActionsProps = {
        title: "Other Attendee Actions",
        taskItems: [
            {
                icon: [
                    <i class="eds-vector-image eds-icon--xsmall eds-vector-image--ui-blue" data-spec="icon" data-testid="icon" aria-hidden="true"><svg class="line-chart_svg__eds-icon--line-chart__svg" viewBox="0 0 24 24"><path class="line-chart_svg__eds-icon--line-chart__base" fill-rule="evenodd" clip-rule="evenodd" d="M3 21v-5.9l2.8-2.4c.4.3.8.4 1.2.4.6 0 1.1-.3 1.5-.7l2.5 1.3v.4c0 1.1.9 2 2 2s2-.9 2-2c0-.3-.1-.6-.2-.9l3-2.5c.3.2.7.4 1.2.4 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .3.1.6.2.9l-3 2.5c-.3-.2-.7-.4-1.2-.4-.6 0-1.1.3-1.5.7L9 11.5v-.4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .3.1.6.2.9L3 13.8V2H2v20h20v-1H3zM19 8.1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1zm-6 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1zm-6-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1z"></path></svg></i>
                ],
                content: "",
                action: [<a href="#">Attendee summary report</a>]
            }
        ]
    }

    return (
        <div className="event-dashboard">
            <div className="navbar-k">
            </div>
            <EventSidenav />
            <div className="body-container">
                <div className="content-container">
                    <div className="insights-container">
                        <div className="header">
                            <h1 className='title'>Dashboard</h1>
                        </div>
                        <div className="cards-container">
                            <Card {...ticketsSummaryCardProps} />
                            <Card {...pageViewsCardProps} />
                        </div>
                        <div className="todo-list-container">
                            <ActionList {...todoListProps} />
                        </div>
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
                            <ActionList {...otherActionsProps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDashboard;