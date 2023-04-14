import { fetchData } from "../../utils/api";

export async function getEvent(eventId) {
    // TODO: Validate eventId
    let res = await fetchData(`/events/${eventId}`, true);
    if (!res || res.status === "fail") {
        return null;
    }
    let event = res.data.event;
    event.startHour = new Date(event.startTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    event.startDay = new Date(event.startTime).toLocaleString('en-US', { day: 'numeric' });
    event.endHour = new Date(event.endTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    event.startDate = new Date(event.startTime).toLocaleDateString('en-US');
    event.endDate = new Date(event.endTime).toLocaleDateString('en-US');
    event.startMonthInWords = new Date(event.startTime).toLocaleString('en-US', { month: 'long' });
    event.year = new Date(event.startTime).getFullYear();

    event.ticketPriceRange = await getTicketPriceRange(eventId);
    return event;
}

async function getTicketPriceRange(eventId) {
    // TODO: Validate eventId
    let res = await fetchData(`/events/${eventId}/tickets/`, true);
    if (!res || res.status === "fail") {
        return null;
    }
    if (res.data.tickets.length === 0) {
        return null;
    }
    if (res.data.tickets.length === 1) {
        let isFree = !res.data.tickets[0].price || res.data.tickets[0].price === 0;
        if (isFree) {
            return "Free";
        }
        return "£" + res.data.tickets[0].price;
    }
    let min = res.data.tickets[0].price;
    let max = res.data.tickets[0].price;
    res.data.tickets.forEach((ticket) => {
        if (ticket.price < min) {
            min = ticket.price;
        }
        if (ticket.price > max) {
            max = ticket.price;
        }
    })
    return "£" + min + " - £" + max;
}
