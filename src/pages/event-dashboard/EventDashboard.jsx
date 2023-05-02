import styles from "./EventDashboard.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import Card from "./card/Card";
import Share from "./share/Share";
import ActionList from "./action-list/ActionList";
import ReportTable from "./report-table/ReportTable";
import NavBar from "../../layouts/navbar/NavBar";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getTicketTypes, getBookings, getTicketsSummary, updateTodoListProps } from "./services";


function EventDashboard() {
    const { eventId } = useParams();

    const [ticketTypeData, setTicketTypeData] = useState([]);
    const [ordersData, setOrdersData] = useState([]);
    const [ticketsSummaryCardData, setTicketsSummaryCardData] = useState({
        totalTickets: 0,
        totalSoldTickets: 0,
        totalSoldPaidTickets: 0,
        totalSoldFreeTickets: 0,
    });
    const [taskItems, setTodoListTaskItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ticketTypesData = await getTicketTypes(eventId);
            setTicketTypeData(ticketTypesData);
            const bookingsData = await getBookings(eventId);
            setOrdersData(bookingsData);
            const ticketsSummaryData = await getTicketsSummary(eventId);
            setTicketsSummaryCardData(ticketsSummaryData);

            const taskItem = await updateTodoListProps(ticketsSummaryData, eventId);
            setTodoListTaskItems([taskItem]);
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
        mainContent: ticketsSummaryCardData.totalSoldTickets,
        subMainContent: "/" + ticketsSummaryCardData.totalTickets,
        subContent: ticketsSummaryCardData.totalSoldPaidTickets + " paid • " + ticketsSummaryCardData.totalSoldFreeTickets + " free",
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
        taskItems
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
        <div className={styles['main-container']}>
            <div className={styles['navbar-container']}>
                <NavBar />
            </div>
            <div className={styles['sidenav-container']}>
                <EventSidenav />
            </div>
            <div className={styles['body-container']}>
                <div className={styles['content-container']}>
                    <div className={styles['insights-container']}>
                        <div className={styles['header']}>
                            <h1 className={styles['title']}>Dashboard</h1>
                        </div>
                        <div className={styles['cards-container']}>
                            <Card {...ticketsSummaryCardProps} />
                            <Card {...pageViewsCardProps} />
                        </div>
                        <div className={styles['todo-list-container']}>
                            <ActionList {...todoListProps} />
                        </div>
                        <div className={styles['share-container']}>
                            <Share
                                eventUrl={`${process.env.REACT_APP_DOMAIN}/events/${eventId}`}
                            />
                        </div>
                    </div>
                    <div className={styles['divider']}>
                        <hr />
                    </div>
                    <div className={styles['stats-container']}>
                        <div className={styles['ds-sales-container']}>
                            <ReportTable {...salesTableProps} />
                        </div>
                        <div className={styles['ds-orders-container']}>
                            <ReportTable {...ordersTableProps} />
                        </div>
                        <div className={styles['ds-other-actions-container']}>
                            <ActionList {...otherActionsProps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDashboard;