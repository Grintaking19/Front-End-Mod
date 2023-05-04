import { fetchData } from "../../utils/api";

import { dateTimeToReadableFormat } from "../../utils/date";
export async function getEvent(eventId) {
    let res = await fetchData(`/creators/events/${eventId}`, true);
    if (!res || res.status === "fail") {
        return {};
    }
    let event = res.data;
    event.startDate = dateTimeToReadableFormat(event.startDate);
    return event;
}