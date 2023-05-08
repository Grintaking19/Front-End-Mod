import styles from './TicketCard.module.css';

function TicketCard() {
    let statusColor = '#f05537';

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-content']}>
                <div className={styles['card-header']}>
                    <h3 className={styles['card-title']}>Ticket Title</h3>
                    <div className={styles['card-status']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={statusColor} class="bi bi-dot" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                        <span>Sun, Jun 11, 2023 7:00 PM</span>
                    </div>
                </div>
                <div className={styles['card-body']}>
                    <div className={styles['check-icon']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <span>Admission</span>
                    </div>
                </div>
                <div className={styles['ticket-breakline']}></div>
                <div className={styles['card-footer']}>
                    <span>Copy Tickets</span>
                </div>
            </div>
        </div>
    );
}

export default TicketCard;