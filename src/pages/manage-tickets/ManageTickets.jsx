import ManageTicketsModule from "./ManageTickets.module.css";
import EventDashboardModule from "../event-dashboard/EventDashboard.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import NavBar from "../../layouts/navbar/NavBar";

import AddTicketCard from "./components/add-ticket-card/AddTicketCard";
import TicketCard from "./components/ticket-card/TicketCard";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ManageTickets() {
    const { eventId } = useParams();

    useEffect(() => {
        async function fetchData() {

        }

        fetchData();
    }, []);


    return (
        <div className={EventDashboardModule['main-container']}>
            <div className={EventDashboardModule['navbar-container']}>
                <NavBar />
            </div>
            <div className={EventDashboardModule['sidenav-container']}>
                <EventSidenav
                    eventId={eventId}
                    activeTab="tickets"
                />
            </div>
            <div className={EventDashboardModule['body-container']}>
                <div className={EventDashboardModule['content-container']}>
                    <div className={EventDashboardModule['header']}>
                        <h1 className={EventDashboardModule['title']}>Tickets</h1>
                    </div>
                    <div className={`${EventDashboardModule['cards-container']} ${ManageTicketsModule['cards-container']}`}>
                        <AddTicketCard />
                        <TicketCard />
                        <TicketCard />
                        <TicketCard />
                        <TicketCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTickets;