import { fetchData } from "../../utils/api";

export async function getTicketTypes(eventId) {
    let res = await fetchData(`/events/${eventId}/tickets/`, true);
    if (!res || res.status === "fail") {
        return [];
    }
    let ticketTypes = [];
    res.data.tickets.forEach((ticket) => {
        ticketTypes.push([ticket.type, ticket.price, `${ticket.currentReservations}/${ticket.capacity}`])
    })
    return ticketTypes;
}

export async function getBookings(eventId) {
    let data = await fetchData(`/bookings/${eventId}`, true);
    if (!data || data.status === "fail") {
        return [];
    }
    let bookings = [];
    data.data.bookings.forEach((booking) => {
        bookings.push([booking.bookingID, booking.name.firstName + " " + booking.name.lastName, 1, booking.price, "2020-01-01"])
    })
    return bookings;
}

export async function getTicketsSummary(eventId) {
    let res = await fetchData(`/events/${eventId}/tickets/`, true);
    if (!res || res.status === "fail") {
        return {};
    }
    let totalSoldTickets = 0;
    let totalTickets = 0;
    let totalSoldFreeTickets = 0;
    let totalSoldPaidTickets = 0;
    res.data.tickets.forEach((ticket) => {
        totalSoldTickets += ticket.currentReservations;
        totalTickets += ticket.capacity;
        if (ticket.price === 0) {
            totalSoldFreeTickets += ticket.currentReservations;
        } else {
            totalSoldPaidTickets += ticket.currentReservations;
        }
    })
    return {
        totalSoldTickets,
        totalTickets,
        totalSoldFreeTickets,
        totalSoldPaidTickets
    };
}

export async function getEventPublishStatus(eventId) {
    let res = await fetchData(`/creators/events/${eventId}`, true);
    if (!res || res.status === "fail") {
        return null;
    }
    console.log(res.data.event.draft);
    return !res.data.event.draft;
}