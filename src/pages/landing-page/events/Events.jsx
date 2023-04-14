import { React, useState, useEffect } from "react";
import "./events.css"
import "./events-mock-api"

export default function Events(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (props.location.latitude && props.location.longitude) {
      fetch(`/api/v1/events/?category=all&location=${props.location.latitude},${props.location.longitude}`)
        .then((response) => response.json())
        .then((data) => setEvents(data));
    }
  }, [props.location]);


  useEffect(() => {
    if (props.activeTab === 'today' || props.activeTab === 'thisweekend') {
      let startDate=''; let endDate='';
      if (props.activeTab === 'today') {startDate=''; endDate=''}
      if (props.activeTab === 'today') {startDate=''; endDate=''}
      fetch(`/api/v1/events/?startDate=${startDate}&endDate=${endDate}&location=${props.location.latitude},${props.location.longitude}`)
        .then((response) => response.json())
        .then((json) => setEvents(json));
    }
    else {
      fetch(`/api/v1/events/?category=${props.activeTab}&location=${props.location.latitude},${props.location.longitude}`)
      .then((response) => response.json())
      .then((json) => setEvents(json));
    }
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