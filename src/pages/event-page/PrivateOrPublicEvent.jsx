import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getEvent } from "./services";
import PrivateEventRegistration from "./PrivateEventRegistration"
import EventPage from "./EventPage"

export function PrivateOrPublicEvent() {
  const [showEvent, setShowEvent] = useState(true);
  const [event, setEvent] = useState({});
  const { eventId } = useParams();
  console.log(eventId);
  useEffect(() => {
    async function fetchData() {

      const eventData = await getEvent(eventId);
      console.log(eventData);
      if (eventData == null) {
        setShowEvent(false);
        console.log("lol");
      }
      else {
        setEvent(eventData);
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
          (<PrivateEventRegistration eventId={eventId} setShowEvent={setShowEvent} setEvent={setEvent} />)
      }
    </div>

  )

}