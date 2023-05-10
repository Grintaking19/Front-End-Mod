import { fetchData, postData, patchData } from "../../utils/api";
import { dateTimeToReadableFormat, dateToReadableFormat, timeToReadableFormat } from "../../utils/date";

export async function getEventTickets(eventId) {
    const res = await fetchData(`/creators/events/${eventId}/tickets/`, true);
    if (!res || res.status === "fail") {
        console.log("fetch failed for get tickets");
        return null;
    }
    res.data.tickets.forEach(ticket => {
        ticket.ticketName = ticket.name;
        ticket.ticketPrice = ticket.price;
        ticket.ticketQuantity = ticket.capacity;
        ticket.ticketType = ticket.type;
        ticket.sellingStartingDate = ticket.sellingStartTime.substring(0, 10);
        ticket.sellingStartingTime = ticket.sellingStartTime.substring(11, 16);
        ticket.sellingEndingDate = ticket.sellingEndTime.substring(0, 10);
        ticket.sellingEndingTime = ticket.sellingEndTime.substring(11, 16);
    });
    return res.data.tickets;
}


export async function createTicket(eventId, ticket) {
    let body = {
        eventId: eventId,
        name: ticket.ticketName,
        type: ticket.ticketType,
        price: ticket.ticketPrice,
        capacity: ticket.ticketQuantity,
        sellingStartTime: ticket.sellingStartingDate + "T" + ticket.sellingStartingTime + ":00.000Z",
        sellingEndTime: ticket.sellingEndingDate + "T" + ticket.sellingEndingTime + ":00.000Z",
    };
    const res = await postData(`/tickets/`, body, true);
    if (!res || res.status === "fail") {
        console.log("Post failed for create ticket");
        return null;
    }
    return res.data.ticket;
}

export async function updateTicket(eventId, ticket) {
    let body = {
        name: ticket.ticketName,
        type: ticket.ticketType,
        price: ticket.ticketPrice,
        capacity: ticket.ticketQuantity,
        sellingStartTime: ticket.sellingStartingDate + "T" + ticket.sellingStartingTime + ":00.000Z",
        sellingEndTime: ticket.sellingEndingDate + "T" + ticket.sellingEndingTime + ":00.000Z",
    };
    const res = await patchData(`/tickets/${ticket._id}/`, body, true);
    if (!res || res.status === "fail" || !res.data || !res.data.ticket) {
        console.log("Post failed for update ticket");
        return null;
    }
    let updatedTicket = res.data.ticket;
    updatedTicket.ticketName = updatedTicket.name;
    updatedTicket.ticketPrice = updatedTicket.price;
    updatedTicket.ticketQuantity = updatedTicket.capacity;
    updatedTicket.ticketType = updatedTicket.type;
    updatedTicket.sellingStartingDate = updatedTicket.sellingStartTime.substring(0, 10);
    updatedTicket.sellingStartingTime = updatedTicket.sellingStartTime.substring(11, 16);
    updatedTicket.sellingEndingDate = updatedTicket.sellingEndTime.substring(0, 10);
    updatedTicket.sellingEndingTime = updatedTicket.sellingEndTime.substring(11, 16);
    return updatedTicket;

}