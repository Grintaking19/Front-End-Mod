import styles from "./EventPage.module.css";
import Navbar from "../../layouts/navbar/NavBar";

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getEvent } from "./services";

function Event() {
    // TODO: Get event ID from URL
    // let eventId = "642fda172c9619b9850f7102";
    const { eventId } = useParams();

    const [event, setEvent] = useState({});

    useEffect(() => {
        async function fetchData() {
            const eventData = await getEvent(eventId);
            setEvent(eventData);
        }

        fetchData();
    }, []);


    return (
        <div className={styles['event-page']}>
            <div className={styles['ep-navbar-container']}>
                <Navbar />
            </div>
            <div className={styles['ep-body-container']}>
                <div className={styles['ep-content-container']}>
                    <div className={styles['ep-event-hero-container']}>
                        {/* <div className={styles['ep-event-hero-background']}>
                        </div> */}
                        {/* <div className={styles['ep-event-hero-image']}> */}
                        <img className={styles['ep-event-hero-image']} src={event.img_url} alt="event-hero-image" />
                        
                    </div>

                    <div className={styles['ep-event-info-container']}>
                        <div className={styles['ep-event-start-date']}>
                            <time datetime={event.startTime}>{event.startMonthInWords} {event.startDay}</time>
                        </div>
                        <div className={styles['ep-event-title']}>
                            <h1>{event.name}</h1>
                        </div>
                        <div className={styles['ep-event-details']}>
                            <h3>When and where</h3>
                            <div className={styles['ep-event-details-container']}>
                                <div className={styles['ep-event-time-container']}>
                                    <div className={styles['ep-event-time-icon']}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-calendar-event" viewBox="0 0 16 16" >
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                    </div>
                                    <div className={styles['ep-event-time']}>
                                        <h4>Date and time</h4>
                                        <p>{event.startMonthInWords} {event.startDay}, {event.year} {event.startHour}</p>
                                    </div>
                                </div>
                                <div className={styles['ep-event-location-container']}>
                                    <div className={styles['ep-event-location-icon']}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                    </div>
                                    <div className={styles['ep-event-location']}>
                                        <h4>Location</h4>
                                        <p><strong>{event.locationName}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['ep-event-description']}>
                            <h3>About this event</h3>
                            <p>
                                {event.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles['ep-event-tickets-container']}>
                        <div className={styles['ep-event-tickets-frame']}>
                            <p className={styles['ep-event-tickets-price']}>
                                {event.ticketPriceRange}
                            </p>
                            <div className={styles['ep-event-tickets-action-button']}>
                                    Get Tickets
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;