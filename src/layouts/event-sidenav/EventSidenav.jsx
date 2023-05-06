import styles from "./EventSideNav.module.css"

import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"

import { getTicketTypes } from "../../pages/event-dashboard/services"
import { getEvent } from "./services"

function EventSidenav(props) {
    const { eventId, activeStep } = props

    let eventPublishSteps = [
        {
            id: 1,
            title: 'Basic Info',
            link: '/event/basic-info',
            status: 'completed'
        }, {
            id: 2,
            title: 'Details',
            link: '/event-details',
            status: 'not-completed'
        }, {
            id: 3,
            title: 'Tickets',
            link: '/event/tickets',
            status: 'not-completed'
        }, {
            id: 4,
            title: 'Publish',
            link: '/publish-event',
            status: 'not-completed'
        }, {
            title: 'Dashboard',
            link: '/event/dashboard',
            selected: true
        }, {
            title: 'Orders',
            link: '/event/orders',
        }, {
            title: 'Add Attendees',
            link: '/event/add-attendees',
        }
    ]

    let icons = {
        completed: [<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>],
        1: [<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
        </svg>],
        2: [<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
        </svg>],
        3: [<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
        </svg>],
        4: [<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-4-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
        </svg>]
    }

    const [isDraft, setIsDraft] = useState(true)
    const [canBePublished, setCanBePublished] = useState(true)
    const [eventDetails, setEventDetails] = useState({})

    useEffect(() => {
        async function fetchData() {
            const eventDetailsData = await getEvent(eventId)
            setEventDetails(eventDetailsData)
            setIsDraft(eventDetailsData.draft)
            const ticketTypes = await getTicketTypes(eventId)
            if (ticketTypes.length === 0) {
                setCanBePublished(false)
            } else {
                setCanBePublished(true)
            }
        }

        fetchData()
    }, [])


    return (
        <div className={styles['es']}>
            <div className={styles['es-header']}>
                <div className={styles['es-go-back-container']}>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>
                        Events
                    </a>
                </div>
                {isDraft ?
                    <div className={styles['event-status-button']}>
                        <div className="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {isDraft ? 'Draft' : 'Published'}
                            </button>
                            {isDraft ?

                                <ul class="dropdown-menu">
                                    {canBePublished ?
                                        <>
                                            <li><a class="dropdown-item" href="#">Publish Now</a></li>
                                            <li><a class="dropdown-item" href="#">Schedule Publish</a></li>
                                        </> :
                                        <>
                                            <li><a class="dropdown-item disabled">Publish Now</a></li>
                                            <li><a class="dropdown-item disabled">Schedule Publish</a></li>
                                        </>
                                    }
                                </ul>
                                : null}
                        </div>
                    </div> : null}
                <div className={styles['es-event-description']}>
                    <div className={styles['es-event-description-title']}>
                        <a href="#" id="event-name"><h4>{eventDetails.name}</h4></a>
                    </div>
                    <div className={styles['es-event-description-date']}>
                        {/* <p>Wed, Apr 19, 2023 7:00 PM</p> */}
                        <p id="event-date">{`${eventDetails.startDate}`}</p>
                    </div>
                    <div className={styles['es-event-description-preview']}>
                        {/* <a href="#" id="preview-event"> */}
                        <Link to={`/events/${eventId}`} id="preview-event">
                            Preview your event
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg>
                        {/* </a> */}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles['es-list']}>
                <ul className={styles['es-list-ul']}>
                    {eventPublishSteps.map((step, index) => {
                        let icon = step.status === 'completed' ? icons[step.status] : icons[step.id];
                        let className = step.selected ? styles['es-list-li'] + " " + styles['es-list-li-active'] : styles['es-list-li'];
                        return (
                            <li className={className} key={index} id={`es-list-li-${step.title}`}>
                                <a href={step.link} id={`es-list-li-${step.title}-link`}>
                                    <div>
                                        {step.status ? icon : null}
                                        <span>{step.title}</span>
                                    </div>
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    );
}

export default EventSidenav;