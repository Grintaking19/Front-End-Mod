import { fetchData } from "../../utils/api";

export async function getTicketTypes(eventId) {
    // TODO: Validate eventId
    let data = await fetchData(`/events/${eventId}/tickets/`);
    if (!data || data.status === "fail") {
        return [[]];
    }
    let ticketTypes = [];
    data.data.tickets.forEach((ticket) => {
        ticketTypes.push([ticket.type, ticket.price, `${ticket.currentReservations}/${ticket.capacity}`])
    })
    return ticketTypes;
}

export async function getBookings(eventId) {
    // TODO: Validate eventId
    let data = await fetchData(`/bookings/${eventId}`);
    if (!data || data.status === "fail") {
        return [[]];
    }
    let bookings = [];
    data.data.bookings.forEach((booking) => {
        bookings.push([booking.bookingID, booking.name.firstName + " " + booking.name.lastName, 1, booking.price, "2020-01-01"])
    })
    return bookings;
}