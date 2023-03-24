import './eventSidenav.css';

function EventSidenav() {
    return (
        <div className="es">
            <div className="es-header">
                <div className="es-go-back-container">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                        Events
                    </a>
                </div>
                <div className="event-status-button">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Draft
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Publish Now</a></li>
                            <li><a class="dropdown-item" href="#">Schedule Publish</a></li>
                        </ul>
                    </div>
                </div>
                <div className="es-event-description">
                    <div className="es-event-description-title">
                        <a href="#"><h4>Event Title</h4></a>
                    </div>
                    <div className="es-event-description-date">
                        <p>Wed, Apr 19, 2023 7:00 PM</p>
                    </div>
                    <div className="es-event-description-preview">
                        <a href="#">
                            Preview your event
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>                        
                        </a>
                    </div>
                </div>
            </div>
            <div className="es-list">
                <ul className="es-list-ul">
                </ul>
            </div>
        </div>
    );
}

export default EventSidenav;