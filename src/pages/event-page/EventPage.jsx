import styles from "./EventPage.module.css";
import Navbar from "../../layouts/navbar/NavBar";
import { GetTickets } from "../booking/GetTickets";
import { useState } from "react";


function Event({event}) {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div className={styles['event-page']} id="event-page">
            <div className={styles['ep-navbar-container']} id="ep-navbar-container">
                <Navbar />
            </div>
            <div className={styles['ep-body-container']} id="ep-body-container">
                <div className={styles['ep-content-container']} id="ep-content-container">
                    <div className={styles['ep-event-hero-container']} id="ep-event-hero-container">
                        {/* <div className={styles['ep-event-hero-background']}>
                        </div> */}
                        {/* <div className={styles['ep-event-hero-image']}> */}
                        <img className={styles['ep-event-hero-image']} src={event.img_url} alt="event-hero-image" id="ep-event-hero-image" />
                        
                    </div>

                    <div className={styles['ep-event-info-container']} id="ep-event-info-container">
                        <div className={styles['ep-event-start-date']} id="ep-event-start-date">
                            <time datetime={event.startTime} id="ep-event-start-time">{event.startMonthInWords} {event.startDay}</time>
                        </div>
                        <div className={styles['ep-event-title']} id="ep-event-title">
                            <h1 id="ep-event-title-text">{event.name}</h1>
                        </div>
                        <div className={styles['ep-event-details']} id="ep-event-details">
                            <h3 id="ep-event-details-text">When and where</h3>
                            <div className={styles['ep-event-details-container']} id="ep-event-details-container">
                                <div className={styles['ep-event-time-container']} id="ep-event-time-container">
                                    <div className={styles['ep-event-time-icon']} id="ep-event-time-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-calendar-event" viewBox="0 0 16 16" >
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                    </div>
                                    <div className={styles['ep-event-time']} id="ep-event-time">
                                        <h4 id="ep-event-time-text">Date and time</h4>
                                        <p id="ep-event-time-date">{event.startMonthInWords} {event.startDay}, {event.year} {event.startHour}</p>
                                    </div>
                                </div>
                                <div className={styles['ep-event-location-container']} id="ep-event-location-container">
                                    <div className={styles['ep-event-location-icon']} id="ep-event-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                    </div>
                                    <div className={styles['ep-event-location']} id="ep-event-location">
                                        <h4 id="ep-event-location-text">Location</h4>
                                        <p id="ep-event-location-name">{event.locationName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['ep-event-description']} id="ep-event-description">
                            <h3 id="ep-event-description-text">About this event</h3>
                            <p id="ep-event-description-value">
                                {event.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles['ep-event-tickets-container']} id="ep-event-tickets-container">
                        <div className={styles['ep-event-tickets-frame']} id="ep-event-tickets-frame">
                            <p className={styles['ep-event-tickets-price']} id="ep-event-tickets-price">
                                {event.ticketPriceRange}
                            </p>
                            <button className={styles['ep-event-tickets-action-button']} id="ep-event-tickets-action-button" onClick={toggleModal}>
                                    Get Tickets
                            </button>
                            {
                                modal &&
                                <GetTickets event={event} modal={modal} setModal={setModal} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;