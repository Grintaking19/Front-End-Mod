import styles from './Card.module.css';

function Card(props) {

    return (
        <div className={styles['card-container']}>
            <div className={styles['dashboard-card']}>
                <div className={styles['card-header']} id={`card-header-${props.title}`}>
                    {props.title}
                </div>
                <div className={styles['card-body']}>
                    <div className={styles['card-body-main-content']}>
                        <span id={`card-body-main-content-${props.title}`}>{props.mainContent}</span>
                        <span className={styles['card-body-main-content-sub']} id={`card-body-main-content-sub-${props.title}`}>{props.subMainContent}</span>
                    </div>
                    <div className={styles['card-body-sub-content']}>
                        <span id={`card-body-sub-content-${props.title}`}>{props.subContent}</span>
                    </div>
                </div>
                <div className={styles['card-footer']}>
                    <p id={`card-footer-${props.title}`}>{props.footer}</p>
                </div>
            </div>
        </div>

    );
}

export default Card;