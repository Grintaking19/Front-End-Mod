import { fetchData } from "../../utils/api";

import { setDateFormat } from "../../pages/event-page/services";

export async function getEvent(eventId) {
    let res = await fetchData(`/creators/events/${eventId}`, true);
    if (!res || res.status === "fail") {
        return {};
    }
    let event = res.data;
    event = setDateFormat(event);
    return event;
}