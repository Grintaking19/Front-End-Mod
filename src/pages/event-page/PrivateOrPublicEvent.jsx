import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getEvent } from "./services";
import PrivateEventRegistration from "./PrivateEventRegistration"
import EventPage from "./EventPage"

export function PrivateOrPublicEvent() {
  const [showEvent, setShowEvent] = useState(true);
  const [event, setEventM] = useState({});
  const { eventId } = useParams();
  console.log(eventId);
  useEffect(() => {
    async function fetchData() {

      let res = await getEvent(eventId);
      res.eventData.ticketPriceRange = res.ticketPriceRange;
      console.log(res.eventData);
      if (res == null) {
        setShowEvent(false);
      }
      else {
        setEventM(res.eventData);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {
        showEvent ?
          (<EventPage event={event} />)
          :
          (<PrivateEventRegistration eventId={eventId} setShowEvent={setShowEvent} setEvent={setEventM} />)
      }
    </div>

  )

}