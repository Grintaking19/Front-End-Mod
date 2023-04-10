import { React, useState, useEffect } from "react";
import "./events.css"
import "./events-mock-api"

export default function Events(props) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/events/?category=all&location=31.2584644,30.0594885`)
      .then((response) => response.json())
      .then((json) => setEvents(json));
  }, []);

  useEffect(() => {
    fetch(`/api/v1/events/?category=${props.activeTab}&location=31.2584644,30.0594885`)
      .then((response) => response.json())
      .then((json) => setEvents(json));
  }, [props.activeTab]);

  return (
    <div>
      <div class="album py-5">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {events.map((event) => (
              <div class="col">
                <div class="card event-card">
                  <img
                    src={event.img_url}
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <div class="card-body">
                    <h4 class="event-card--name">{event.eventName}</h4>
                    <h6 class="event-card--date">
                      {event.startTime.substring(0, event.startTime.indexOf(" "))}
                    </h6>
                    <h6>{event.locationName}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

}