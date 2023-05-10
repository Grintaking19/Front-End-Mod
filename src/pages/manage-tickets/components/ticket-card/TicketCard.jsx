import styles from './TicketCard.module.css';

function TicketCard(props) {
    const { idx, ticket } = props;
    const { ticketName, sellingStartingDate, ticketStatus, ticketQuantity, currentReservation } = ticket;
    let statusColor = 'grey'
    switch (ticketStatus) {
        case 'active':
            statusColor = 'green';
            break;
        case 'scheduled':
            statusColor = '#f05537';
            break;
        case 'draft':
            statusColor = 'grey';
            break;
        default:
    }

    return (
        <div className={styles['card-container']} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id={`ticket--card-${idx}`} onClick={props.onClick}>
            <div className={styles['card-content']}>
                <div className={styles['card-header']}>
                    <h3 className={styles['card-title']} id={`ticket-card-title-${idx}`}>{ticketName ? ticketName : "General Admission"}</h3>
                    <div className={styles['card-status']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={statusColor} class="bi bi-dot" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                        <span id={`ticket-card-start-date-${idx}`}>{sellingStartingDate ? sellingStartingDate : "Sun, Jun 11, 2023 7:00 PM"}</span>
                    </div>
                </div>
                <div className={styles['card-body']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                    <span id={`ticket-card-capacity-${idx}`}>{currentReservation || 0} / {ticketQuantity || 0}</span>
                </div>
                <div className={styles['ticket-breakline']}></div>
                <div className={styles['card-footer']}>
                    <span id={`ticket-card-edit-${idx}`}>Edit Ticket</span>
                </div>
            </div>
        </div>
    );
}

export default TicketCard;