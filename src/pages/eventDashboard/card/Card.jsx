import './card.css';

function Card() {
    return (
        <div className="card-container">
            <div className="dashboard-card">
                <div className="card-header">
                    Tickets Sold
                </div>
                <div className="card-body">
                    <div className="card-body-main-content">
                        <span>0</span>
                        <span className="card-body-main-content-sub">/0</span>
                    </div>
                    <div className="card-body-sub-content">
                        <span>0 paid • 0 free</span>
                    </div>
                </div>
                <div className="card-footer">
                    <p></p>
                </div>
            </div>
        </div>
            
    );
}

export default Card;