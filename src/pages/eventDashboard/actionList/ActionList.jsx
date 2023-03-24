import './actionList.css';

function ActionList(props) {
    return (
        <div className="action-list">
            <div className="action-list-header">
                <h4>{props.title}</h4>
            </div>
            <div className="action-list-body">
                {props.taskItems.map((taskItem, index) => {
                    return (
                        <div className="tasks-item">
                            <div className="tasks-item-icon">
                                {taskItem.icon}
                            </div>
                            <div className="tasks-item-content">
                                {taskItem.content}
                                <div className="tasks-item-action">
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