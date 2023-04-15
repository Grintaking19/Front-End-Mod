import styles from './ActionList.module.css';

function ActionList(props) {
    return (
        <div className={styles['action-list']}>
            <div className={styles['action-list-header']}>
                <h4>{props.title}</h4>
            </div>
            <div className={styles['action-list-body']}>
                {props.taskItems.map((taskItem, index) => {
                    return (
                        <div className={styles['tasks-item']}>
                            <div className={styles['tasks-item-icon']}>
                                {taskItem.icon}
                            </div>
                            <div className={styles['tasks-item-content']}>
                                {taskItem.content}
                                <div className={styles['tasks-item-action']}>
                                    {taskItem.action}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ActionList;