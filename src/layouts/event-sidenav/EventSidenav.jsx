import styles from "./EventSideNav.module.css"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { getTicketTypes } from "../../pages/event-dashboard/services"
import { getEvent } from "./services"
import { icons, eventPublishSteps } from "./data"

/**
 * Component for the sidenav of the event creation pages
 * 
 * @component
 * @param {Object} props
 * @param {string} props.eventId - The id of the event (Mandatory if the event has been created in the backend)
 * @param {string} props.activeTab - The active tab of the sidenav
 * @param {string} props.eventName - The name of the event (Mandatory if the event has not been created in the backend yet and no eventId is provided)
 * @param {string} props.startDate - The start date of the event (Optional, will be displayed as TBD if not provided)
 * @name EventSidenav
 * @example
 * const activeTab = 'details'
 * const eventName = 'Event Name'
 * return (
 *  <EventSidenav activeTab={activeTab} eventName={eventName} />
 * )
 * 
 * @example
 * const eventId = '123'
 * const activeTab = 'details'
 * return (
 * <EventSidenav eventId={eventId} activeTab={activeTab} />
 * )
 */
function EventSidenav(props) {
    const navigate = useNavigate();
    // TODO: Remove the eventName and startDate props and use the eventId to fetch the event details if the backend have implemented edit event details
    const { eventId, activeTab, eventName, startDate } = props
    let eventCurrentInfo= props.eventCurrentInfo;
    
    // TODO: Use the activeTab prop to set the active tab

    const [isDraft, setIsDraft] = useState(true)
    const [canBePublished, setCanBePublished] = useState(false)
    const [eventDetails, setEventDetails] = useState({
        name: eventName,
        startDate: startDate || 'TBD'
    })

    useEffect(() => {
        async function fetchData() {
            if (!eventId) return
            const {eventData} = await getEvent(eventId)
            setEventDetails(eventData)
            setIsDraft(eventData.draft)
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
                    {!isDraft ?
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
                    : null}
                </div>
            </div>
            <div className={styles['es-list']}>
                <ul className={styles['es-list-ul']}>
                    {eventPublishSteps.map((step, index) => {
                        let icon = step.status === 'completed' ? icons[step.status] : icons[step.id];
                        let className = step.selected ? styles['es-list-li'] + " " + styles['es-list-li-active'] : styles['es-list-li'];
                        return (
                            <li className={className} key={index} id={`es-list-li-${step.title}`}>
                                <a id={`es-list-li-${step.title}-link`}   onClick={() => { navigate(step.link, { state: {...eventCurrentInfo} }) }}>

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