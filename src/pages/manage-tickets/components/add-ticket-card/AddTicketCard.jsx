import styles from './AddTicketCard.module.css';

function AddTicketCard(props) {
    return (
        <div className={styles['card-button-container']} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id="add-ticket--card" onClick={props.onClick}>
            <div className={styles['card-content']}>
                <div className={styles['plus-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#3659e3" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                </div>
                <div className={styles['card-subtitle']}>
                    <div><strong>Create new tickets</strong></div>
                    <p>Start with a blank slate</p>
                </div>
            </div>
        </div>
    )
}

export default AddTicketCard;