import './todoList.css';

function TodoList() {
    return (
        <div className="todo-list">
            <div className="todo-list-header">
                <h2>Your to-do list</h2>
            </div>
            <div className="todo-list-body">
                <div className="tasks-item">
                    <div className="tasks-item-icon">
                        <i>
                            <svg viewBox="0 0 24 24">
                                <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z">
                                </path>
                            </svg>
                        </i>
                    </div>
                    <div className="tasks-item-content">
                        Your Event doesn't have any tickets
                        <div className="tasks-item-action">
                            <a href="#">Create tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;