import "./event-page.css";
// import Navbar from "../../layouts/navbar/Navbar";

import { useState, useEffect } from "react";

function Event() {
    // TODO: Get event ID from URL
    let eventId = 1;

    return (
        <div className="event-page">
            <div className="ep-navbar-container">
                {/* <Navbar /> */}
            </div>
            <div className="ep-body-container">
                <div className="ep-content-container">
                    <div className="ep-event-hero-container">
                        {/* <div className="ep-event-hero-background">
                        </div> */}
                        {/* <div className="ep-event-hero-image"> */}
                            <img className="ep-event-hero-image" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F356067299%2F310722029665%2F1%2Foriginal.20220916-215230?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=b8c73e4bcfff9b01d09cdfa2b86f0a38" alt="event-hero-image" />
                        {/* </div> */}
                    </div>

                    <div className="ep-event-info-container">
                        <div className="ep-event-start-date">
                            <time datetime="2023-04-19">Apr 19</time>
                        </div>
                        <div className="ep-event-title">
                            <h1>Event Title</h1>
                        </div>
                        <div className="ep-event-details">
                            <h3>When and where</h3>
                            <div className="ep-event-details-container">
                                <div className="ep-event-time-container">
                                    <div className="ep-event-time-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                    </div>
                                    <div className="ep-event-time">
                                        <h4>Date and time</h4>
                                        <p>April 19, 2023 12:00 PM</p>
                                    </div>
                                </div>
                                <div className="ep-event-location-container">
                                    <div className="ep-event-location-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                    </div>
                                    <div className="ep-event-location">
                                        <h4>Location</h4>
                                        <p><strong>Tolip Hotel and Spa</strong> Tolip Hotel and Spa New Cairo, New Cairo 1111</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ep-event-description">
                            <h3>About this event</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                euismod, nisl vitae ultricies tincidunt, nunc nisl aliquam
                                libero, eget lacinia nunc lorem eget nisl. Sed euismod, nisl
                                vitae ultricies tincidunt, nunc nisl aliquam libero, eget
                                lacinia nunc lorem eget nisl.
                            </p>
                        </div>
                    </div>
                    <div className="ep-event-tickets-container">
                        <div className="ep-event-tickets-frame">
                            <p className="ep-event-tickets-price">
                                $5
                            </p>
                            <div className="ep-event-tickets-action-button">
                                    Buy Ticket
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;