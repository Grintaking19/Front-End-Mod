import './card.css';

function Card(props) {
    return (
        <div className="card-container">
            <div className="dashboard-card">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <div className="card-body-main-content">
                        <span>{props.mainContent}</span>
                        <span className="card-body-main-content-sub">{props.subMainContent}</span>
                    </div>
                    <div className="card-body-sub-content">
                        <span>{props.subContent}</span>
                    </div>
                </div>
                <div className="card-footer">
                    <p>{props.footer}</p>
                </div>
            </div>
        </div>
            
    );
}

export default Card;