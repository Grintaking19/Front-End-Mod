import ManageTicketsModule from "./ManageTickets.module.css";
import EventDashboardModule from "../event-dashboard/EventDashboard.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import NavBar from "../../layouts/navbar/NavBar";

import Card from "../event-dashboard/card/Card";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ManageTickets() {
    const { eventId } = useParams();

    useEffect(() => {
        async function fetchData() {

        }

        fetchData();
    }, []);

    let pageViewsCardProps = {
        title: "Page Views",
        mainContent: "0",
        subMainContent: "",
        subContent: "0 from Eventbrite",
        footer: ["Open ", <a href="#">page views report</a>]
    }

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
                    <div className={EventDashboardModule['cards-container']}>
                        {/* <Card {...pageViewsCardProps} />
                        <Card {...pageViewsCardProps} /> */}
                        <div className={ManageTicketsModule['card-button-container']}>
                            <div className={ManageTicketsModule['card-content']}>
                                <div className={ManageTicketsModule['card-title']}>
                                    <i class="eds-vector-image eds-icon--small eds-vector-image--ui-blue--hover eds-vector-image--stroke-ui-blue--hover" data-spec="icon" aria-hidden="true">
                                        <svg x="0" y="0" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z">
                                            </path>
                                        </svg>
                                    </i>
                                </div>
                                <div className={ManageTicketsModule['card-subtitle']}>
                                    <p>Set up tickets for your event</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTickets;