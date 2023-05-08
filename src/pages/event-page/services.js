import { fetchData } from "../../utils/api";

export async function getEvent(eventId) {
    // TODO: Validate eventId
    let res = await fetchData(`/events/${eventId}`, true);
    if (!res || res.status === "fail") {
        console.log("fetch failed for get events");
        return null;
    }
    let event = JSON.parse(JSON.stringify(res.data));;
    event = setDateFormat(event);
    let ticketPriceRange = await getTicketPriceRange(eventId);
    event.ticketPriceRange = ticketPriceRange;
    console.log("This is the event:")
    console.log(event)
    // console.log("lol first ticket price range: " + event.ticketPriceRange);
    return event;
}

export async function setDateFormat(event) {
    event.startHour = new Date(event.startDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    event.startDay = new Date(event.startDate).toLocaleString('en-US', { day: 'numeric' });
    event.endHour = new Date(event.endDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    event.startDate = new Date(event.startDate).toLocaleDateString('en-US');
    event.endDate = new Date(event.endDate).toLocaleDateString('en-US');
    event.startMonthInWords = new Date(event.startDate).toLocaleString('en-US', { month: 'long' });
    event.year = new Date(event.startDate).getFullYear();
    return event;
}

async function getTicketPriceRange(eventId) {
    // TODO: Validate eventId
    let res = await fetchData(`/events/${eventId}/tickets/?page=0&limit=20`, true);
    console.log(res);
    if (!res || res.status === "fail") {
        return null;
    }
    console.log(`tickets:${res.data.tickets.length}`)
    if (res.data.tickets.length === 0) {
        return null;
    }
        
    if (res.data.tickets.length === 1) {
        let isFree = !res.data.tickets[0].price || res.data.tickets[0].price === 0;
        if (isFree) {
            console.log("free");
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
