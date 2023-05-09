import { fetchData } from "../../utils/api";

export async function getTicketsType(eventId) {
  try {

    let res = await fetchData(`/events/${eventId}/tickets/?page=0&limit=50`, true);
    console.log(res);
    return res.data.tickets 

  } catch (err) {

    console.log(err);
    return [];
  }

}
