import {React, useState, useEffect} from "react"
import styles from "./Events.module.css"

import { useParams, useNavigate } from 'react-router-dom';
import useFetch from "../useFetch";
import NavBar from "../../../layouts/navbar/NavBar";

const NAMESPACE = "https://hebtus.me/api/v1/events/";
export default function CategorizedEvents()
{
    const [events, setEvents] = useState([])
    const {filter, latitude, longitude} = useParams()

    // const {data, eventsLoading, error} = useFetch(`${NAMESPACE}?category=${category}&location=${latitude},${longitude}`)
    const {data, eventsLoading, error} = useFetch(`${NAMESPACE}?category=${filter}&location=31.2584644,30.0594885`)

    useEffect( ()=> {if (data) {setEvents(data.data.events);}} , [data] )
    const navigate = useNavigate();
    const handleEventCardClick = (event) => {
        // setSelectedEvent(event);
        navigate(`/events/${event._id}`);
      }

    return(

        <div>
            <NavBar />
            <div id="events-album-container">
                {(!eventsLoading && events.length > 0) &&
                    <div className="album py-5" id="events-album">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" id="events-row">
                                {events.map((event) => (
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
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
    }


            </div>
            </div>
            )
}