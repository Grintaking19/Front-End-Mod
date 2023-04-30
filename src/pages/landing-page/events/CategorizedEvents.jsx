import { React, useState, useEffect } from "react"
import styles from "./Events.module.css"
import axios from "axios";

import { useParams, useNavigate } from 'react-router-dom';
import useFetch from "../useFetch";
import NavBar from "../../../layouts/navbar/NavBar";
const EVENTS_PER_PAGE = 8;


const NAMESPACE = "https://hebtus.me/api/v1/events/";
export default function CategorizedEvents() {
    const [events, setEvents] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const { filter, longitude, latitude } = useParams()
    let urlFilter = ''
    let categoryTitle = ''

    switch (filter) {
        case 'Food&Drink':
            urlFilter = 'Food %26 Drink'
            categoryTitle = 'Food & Drink'
            break
        case 'Sports&Fitness':
            urlFilter = 'Sports %26 Fitness'
            categoryTitle = 'Sports & Fitness'
            break
        case 'Health&Fitness':
            urlFilter = 'Health %26 Fitness'
            categoryTitle = 'Health & Fitness'
            break
        case 'Performing&VisualArts':
            urlFilter = 'Performing %26 Visual Arts'
            categoryTitle = 'Performing & Visual Arts'
            break
        default:
            urlFilter = filter
            categoryTitle = filter
    }

    const [hadEvents, setHadEvents] = useState(false);

    const [eventsLoading, setEventsLoading] = useState(true);
    useEffect(() => {
        setEventsLoading(true);

        axios
            .get(`${NAMESPACE}?category=${urlFilter}&location=${longitude},${latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}`)
            .then((response) => {
                setEvents(response.data.data.events);
                if (response.data.data.events.length > 0) { setHadEvents(true) }
                console.log(hadEvents)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setEventsLoading(false);
            });
    }, [currentPage]);

    // const { data, eventsLoading, error } = useFetch(`${NAMESPACE}?category=${urlFilter}&location=${longitude},${latitude}&page=${currentPage}&limit=${EVENTS_PER_PAGE}`)

    // useEffect(() => { if (data) { setEvents(data.data.events); } }, [data])
    const navigate = useNavigate();
    const handleEventCardClick = (event) => {
        // setSelectedEvent(event);
        navigate(`/events/${event._id}`);
    }

    const initialLoadingMsg = <p className={styles['events-loading-status']}>Loading...</p>
    const [eventsLoadingMsg, setEventsLoadingMsg] = useState(initialLoadingMsg);
    useEffect(() => {
        if (eventsLoading) {
            setEventsLoadingMsg(initialLoadingMsg);
        }
        else if (!eventsLoading && events.length === 0 && hadEvents) {
            setEventsLoadingMsg(<p className={styles['events-loading-status']}>
                We couldn't find more {categoryTitle} events nearby
            </p>)
        }
        else if (!eventsLoading && events.length === 0 && !hadEvents) {
            setEventsLoadingMsg(<p className={styles['events-loading-status']}>
                No {categoryTitle} events nearby
            </p>)
        }
        // else if (!eventsLoading &&  events.length === 0 && events.length < EVENTS_PER_PAGE) {
        //   setEventsLoadingMsg(<p className={styles['events-loading-status']}>
        //     No {categoryTitle} events nearby
        //   </p>)
        // }
        else if (!eventsLoading && events.length > 0) {
            setEventsLoadingMsg('')
        }

    }, [eventsLoading]);

    return (

        <div >
            <NavBar />
            <div style={{ background: "#faf8f7" }}>
                <h2 id="events-filter-header"
                    className={styles['events-filter-header']}
                >
                    {categoryTitle} events near your location
                </h2>
                {(!eventsLoading && events.length > 0) ?
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
                                                        <div className={styles['online-or-free-container']}>
                                                            {event.online ? <h6 id='is-online' className={styles['event-card--is-online']}>Online</h6> : ''}
                                                            {/* {event.free ? <h6 id='is-free' className={styles['event-card--is-free']}>Free</h6> : ''} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        }
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
        </div>
    )
}