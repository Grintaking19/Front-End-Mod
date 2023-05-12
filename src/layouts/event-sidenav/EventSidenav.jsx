import styles from "./EventSideNav.module.css"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { getTicketTypes } from "../../pages/event-dashboard/services"
import { getEvent } from "./services"
import { icons } from "./data"
import { act } from "react-dom/test-utils"

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
    let { eventId, activeTab, eventName, startDate } = props
    let eventCurrentInfo = props.eventCurrentInfo;
    eventId = eventId || eventCurrentInfo.id;

    //console.log(props.eventCurrentInfo);
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
            const eventData = await getEvent(eventId)
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

    const eventPublishSteps = [
        {
            id: 1,
            title: 'Basic Info',
            link: '/create-event',
            status: 'completed',
            selected: activeTab === 'basic-info'
        }, {
            id: 2,
            title: 'Details',
            link: '/event-details',
            status: 'not-completed',
            selected: activeTab === 'event-details'
        }, {
            id: 3,
            title: 'Tickets',
            link: eventId ? `/manage/events/${eventId}/tickets` : null,
            status: 'not-completed',
            selected: activeTab === 'tickets'
        }, {
            id: 4,
            title: 'Publish',
            link: '/publish-event',
            status: 'not-completed',
            selected: activeTab === 'event-publish'
        }, {
            title: 'Dashboard',
            link: eventId ? `/event-dashboard/${eventId}` : null,
            selected: activeTab === 'dashboard'
        }, {
            title: 'Orders',
            link: '/event/orders',
        }, {
            title: 'Add Attendees',
            link: '/event/add-attendees',
        }
    ]

    return (
        <div className={styles['es']}>
            <div className={styles['es-header']}>
                <div className={styles['es-go-back-container']}>
                    <Link to="/events-list/" id="go-back-to-events-list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>
                        Events
                    </Link>
                </div>
                {isDraft ?
                    <div className={styles['event-status-button']}>
                        <div className="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="event-status-button">
                                {isDraft ? 'Draft' : 'Published'}
                            </button>
                            {isDraft ?

                                <ul class="dropdown-menu" id="event-status-dropdown-menu">
                                    {canBePublished ?
                                        <>
                                            <li><Link to="/publish-event" class="dropdown-item" id="publish-now-option">Publish Now</Link></li>
                                            <li><Link to="/publish-event" class="dropdown-item" id="schedule-publish-option">Schedule Publish</Link></li>
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
                        //console.log(step);
                        return (
                            <li className={className} key={index} id={`es-list-li-${step.title}`}>
                                <a id={`es-list-li-${step.title}-link`} onClick={() => {
                                    if (step.link === null) return;
                                    navigate(step.link, { state: { ...eventCurrentInfo } })
                                }}>

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