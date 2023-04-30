import { React, useState, useEffect } from "react";
import styles from "./Events.module.css"
import useFetch from "../useFetch";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const NAMESPACE = "https://hebtus.me/api/v1/events/";
const EVENTS_PER_PAGE = 12;

export default function Events(props) {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const url = () => {
    if (props.location.latitude && props.location.longitude) {
      if (props.activeTab === 'today' || props.activeTab === 'thisweekend') {
        let startDate = '';
        let endDate = '';
        const now = new Date();
        if (props.activeTab === 'today') {
          startDate = now.toISOString().slice(0, 10);
          endDate = startDate;
        }
        if (props.activeTab === 'thisweekend') {
          /* If the day is Friday(5) or Sat(6), set difference to 0,
          this means that we need to add 0 days until nearest weekend 
          Otherwise, we subtract the day of the week from 5 to get the number of days until Friday. 
          We then create two new Date objects, 
          one for the first day of the weekend and one for the last day of the weekend, 
          by adding the diff value to the current date and using new Date(). 
          We then format the dates to 'yyyy-mm-dd' format using toISOString() and slice(), 
          and assign them to startDate and endDate variables respectively.
          */
          const dayOfWeek = now.getDay();
          const diff = dayOfWeek === 5 ? 0 : dayOfWeek === 6 ? 0 : 5 - dayOfWeek;
          const firstDayOfWeekend = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
          const lastDayOfWeekend = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff + 1);
          startDate = firstDayOfWeekend.toISOString()
          if (dayOfWeek === 6) {
            endDate = startDate;
          } else {
            endDate = lastDayOfWeekend.toISOString()
          }
        }
        // return `${NAMESPACE}?startDate=${startDate}&endDate=${endDate}&location=${props.location.latitude},${props.location.longitude}`;
        return `${NAMESPACE}?startDate=${startDate}&endDate=${endDate}&location=31.2584644,30.0594885&page=${currentPage}&limit=${EVENTS_PER_PAGE}`;
      } 
      else {
        if (props.activeTab === '') { return `${NAMESPACE}?location=${props.location.longitude},${props.location.latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}`; }
        if (props.activeTab === 'online') { return `${NAMESPACE}?location=${props.location.longitude},${props.location.latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}&online=1`; }
        if (props.activeTab === 'free') { return `${NAMESPACE}?location=${props.location.longitude},${props.location.latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}&free=1`; }
        if (props.activeTab === 'charity') { return `${NAMESPACE}?category=Charity %26 Causes&location=${props.location.longitude},${props.location.latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}`; }

        else
        // return `${NAMESPACE}?category=${props.activeTab}&location=${props.location.latitude},${props.location.longitude}`;
        { return `${NAMESPACE}?category=${props.activeTab}&location=${props.location.longitude},${props.location.latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}`; }
      }
    }
  };

  console.log(url())
  const [eventsLoading, setEventsLoading] = useState(true);
  useEffect(() => {
    setEventsLoading(true);
   
    console.log(url())
    axios
      .get(url())
      .then((response) => {
        setEvents(response.data.data.events);
        console.log(events)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setEventsLoading(false);
      });
  }, [url()]);

  const initialLoadingMsg = <p className={styles['events-loading-status']}>Loading...</p>
  const [eventsLoadingMsg, setEventsLoadingMsg] = useState(initialLoadingMsg);

  useEffect(() => {
    if (eventsLoading || props.location.loading) {
      setEventsLoadingMsg(initialLoadingMsg);
    }
    else if (!eventsLoading && !props.location.loading && events.length === 0) {
      setEventsLoadingMsg(<p className={styles['events-loading-status']}>
        No Events in {props.location.city}
      </p>)
    }
    else if (!eventsLoading && !props.location.loading && events.length > 0) {
      setEventsLoadingMsg('')
    }

  }, [eventsLoading, props.location.loading]);

  const navigate = useNavigate();
  const handleEventCardClick = (event) => {
    navigate(`/events/${event._id}`);
  }

return (
    <div id="events-album-container"> 
      { (!eventsLoading && events.length > 0) ? 
        <div className="album py-5" id="events-album">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" id="events-row">
              { events.map((event) => (
                <div className="col" key={event._id}>
                  <div className={`card ${styles['event-card']}`} onClick={() => handleEventCardClick(event)} id={`event-${event._id}`}>
                    <img id={`event-${event._id}-img`}
                      src={event.img_url}
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                    <div className="card-body" id={`event-${event._id}-card`}>
                      <h4 id={`event-${event._id}-name`} className={styles['event-card--name']}>{event.name}</h4>
                      <h6 id={`event-${event._id}-startdate`} className={styles['event-card--date']}> Starts {' '}
                        {new Date(event.startDate).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </h6>
                      <h6 id={`event-${event._id}-enddate`} className={styles['event-card--date']}> Ends {' '}
                        {new Date(event.endDate).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </h6>
                      <h6 id={`event-${event._id}-location`}>{event.locationName}</h6>
                      <div className={styles['online-or-free-container']}>
                      {event.online? <h6 id='is-online' className={styles['event-card--is-online']}>Online</h6> : ''}
                      {event.free? <h6 id='is-free' className={styles['event-card--is-free']}>Free</h6> : ''}
                      </div>
                    </div>
                  </div>
                </div>
              ))} 
            </div>
          </div>
        </div> : eventsLoadingMsg 
    }

    <div id="page-buttons" className={styles['page-buttons']}>
      <button id="previous-page-button"
        className={styles['page-btn']}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button id="next-page-button"
        className={styles['page-btn']}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={events.length < EVENTS_PER_PAGE}
      >
        Next Page
      </button>
    </div>
    </div>
  );

}