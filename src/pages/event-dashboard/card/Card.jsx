import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles=['card-container']}>
            <div className={styles['dashboard-card']}>
                <div className={styles['card-header']}>
                    {props.title}
                </div>
                <div className={styles['card-body']}>
                    <div className={styles['card-body-main-content']}>
                        <span>{props.mainContent}</span>
                        <span className={styles['card-body-main-content-sub']}>{props.subMainContent}</span>
                    </div>
                    <div className={styles['card-body-sub-content']}>
                        <span>{props.subContent}</span>
                    </div>
                </div>
                <div className={styles['card-footer']}>
                    <p>{props.footer}</p>
                </div>
            </div>
        </div>
            
    );
}

export default Card;