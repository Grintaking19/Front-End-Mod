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
