import { fetchData } from "../../utils/api";
import { dateToReadableFormat } from "../../utils/date";


export async function getTicketTypes(eventId) {
    let res = await fetchData(`/creators/events/${eventId}/tickets/`, true);
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
    let res = await fetchData(`/events/${eventId}/bookings`, true);
    if (!res || res.status === "fail") {
        return [];
    }
    let bookings = [];
    res.data.bookings.forEach((booking) => {
        bookings.push([booking._id, booking.name.firstName + " " + booking.name.lastName, booking.quantity, booking.price, dateToReadableFormat(booking.purchasedOn)])
    })
    return bookings;
}

export async function getTicketsSummary(eventId) {
    let totalTickets = 0;
    let totalSoldTickets = 0;
    let totalSoldFreeTickets = 0;
    let totalSoldPaidTickets = 0;

    let res = await fetchData(`/creators/events/${eventId}/tickets/`, true);
    if (!res || res.status === "fail") {
        return {
            totalTickets,
            totalSoldTickets,
            totalSoldFreeTickets,
            totalSoldPaidTickets
        };
    }
    res.data.tickets.forEach((ticket) => {
        totalTickets += ticket.capacity;
        totalSoldTickets += ticket.currentReservations;
        if (ticket.price === 0) {
            totalSoldFreeTickets += ticket.currentReservations;
        } else {
            totalSoldPaidTickets += ticket.currentReservations;
        }
    })
    return {
        totalTickets,
        totalSoldTickets,
        totalSoldFreeTickets,
        totalSoldPaidTickets
    };
}

export async function getEventPublishStatus(eventId) {
    let res = await fetchData(`/creators/events/${eventId}`, true);
    if (!res || res.status === "fail") {
        return null;
    }
    return !res.data.draft;
}

export async function updateTodoListProps(ticketsSummaryCardData, eventId, navigate, eventCurrentInfo) {
    let taskItems = [
        {
            icon: [
                <i>
                    <svg viewBox="0 0 24 24">
                        <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z">
                        </path>
                    </svg>
                </i>
            ],
            content: "Your Event doesn't have any tickets",
            action: [<a id="create-tickets-task" onClick={() => {
                navigate(`/manage/events/${eventId}/tickets`, { state: { ...eventCurrentInfo } })
            }}>Create tickets</a>]
        }, {
            icon: [
                <i class="eds-vector-image eds-icon--xsmall eds-vector-image--grey-700" data-spec="icon" data-testid="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g></svg></i>
            ],
            content: "Publish your event",
            action: [<a id="publish-event-task" onClick={() => {
                navigate("/publish-event", { state: { ...eventCurrentInfo } })
            }} > Review your publish settings</a >]
        }
    ]

    if (ticketsSummaryCardData.totalTickets === 0) {
        return taskItems[0];
    }
    let isPublished = await getEventPublishStatus(eventId);
    if (isPublished === false) {
        return taskItems[1];
    }
    return [];
}