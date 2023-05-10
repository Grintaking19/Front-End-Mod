import ManageTicketsModule from "./ManageTickets.module.css";
import EventDashboardModule from "../event-dashboard/EventDashboard.module.css";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import NavBar from "../../layouts/navbar/NavBar";

import AddTicketCard from "./components/add-ticket-card/AddTicketCard";
import TicketCard from "./components/ticket-card/TicketCard";
import TicketSidebar from "./components/ticket-sidebar/TicketSidebar";

import {dateToReadableFormat, timeToReadableFormat, dateTimeToReadableFormat} from "../../utils/date";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { getEventTickets, createTicket, updateTicket } from "./services";

function ManageTickets() {
    const { eventId } = useParams();
    const {state} = useLocation();
    console.log(state);

    const [acitveCardId, setActiveCardId] = useState('add-ticket--card');
    const [tickets, setTickets] = useState([{
        "ticketName" : "Lucky Draw",
        "ticketPriceType": "paid",
        "ticketPrice": 100,
        "ticketQuantity" : 100,
        "ticketStatus": "scheduled",
        "sellingStartingDate": new Date().toUTCString(),
        "currentReservation": 30,
    }]);

    useEffect(() => {
        async function fetchData() {
            const tickets = await getEventTickets(eventId);
            setTickets(tickets);
        }

        fetchData();
    }, []);


    function handleCardClick(event) {
        // search for the card id in the clicked element and its parents
        let cardId = null;
        let element = event.target;
        while (element) {
            if (element.id.includes('ticket--card')) {
                cardId = element.id;
                break;
            }
            element = element.parentElement;
        }
        if (cardId !== "add-ticket--card") {
            console.log(cardId);
            // extract the card id from the string "ticket--card-<id>"
            cardId = cardId.split('-')[3];
            console.log(cardId);
        }
        setActiveCardId(cardId);
    }

    async function handleAddTicket(ticket) {
        console.log(ticket);
        await createTicket(eventId, ticket);
    }

    async function handleEditTicket(ticket) {
        console.log(ticket);
        const updatedTicket = await updateTicket(eventId, ticket);
        console.log(updatedTicket);
        if (updatedTicket) {
            const updatedTickets = tickets.slice();
            updatedTickets[acitveCardId] = updatedTicket;
            setTickets(updatedTickets);
        }
        
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
                    eventCurrentInfo={state}
                />
            </div>
            <div className={EventDashboardModule['body-container']}>
                <div className={EventDashboardModule['content-container']}>
                    <div className={EventDashboardModule['header']}>
                        <h1 className={EventDashboardModule['title']}>Tickets</h1>
                    </div>
                    <div className={`${EventDashboardModule['cards-container']} ${ManageTicketsModule['cards-container']}`}>
                        <AddTicketCard onClick={handleCardClick}/>
                        {tickets.map((ticket, index) => {
                            return (
                                <TicketCard
                                    key={index}
                                    idx={index}
                                    ticket={ticket}
                                    onClick={handleCardClick}
                                    active={acitveCardId === index}
                                />
                            );
                        })}
                    </div>
                </div>
                <TicketSidebar
                    isNewTicket={acitveCardId === 'add-ticket--card'}
                    ticket={acitveCardId !== 'add-ticket--card' ? tickets[acitveCardId] : null}
                    onAddTicket={handleAddTicket}
                    onEditTicket={handleEditTicket}
                    />
            </div>
        </div>
    );
}

export default ManageTickets;