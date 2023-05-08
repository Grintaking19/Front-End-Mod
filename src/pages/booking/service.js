import { fetchData } from "../../utils/api";

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