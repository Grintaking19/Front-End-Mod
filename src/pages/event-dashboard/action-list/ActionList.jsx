import styles from './ActionList.module.css';

function ActionList(props) {
    return (
        <div className={styles['action-list']}>
            <div className={styles['action-list-header']} id={`action-list-header-${props.title}`}>
                <h4>{props.title}</h4>
            </div>
            <div className={styles['action-list-body']}>
                {props.taskItems.map((taskItem, index) => {
                    return (
                        <div className={styles['tasks-item']}>
                            <div className={styles['tasks-item-icon']}>
                                {taskItem.icon}
                            </div>
                            <div className={styles['tasks-item-content']} id={`tasks-item-content-${index}`}>
                                {taskItem.content}
                                <div className={styles['tasks-item-action']} id={`tasks-item-action-${index}`}>
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