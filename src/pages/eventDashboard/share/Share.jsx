import './share.css';

function Share() {
    return (
        <div className="share">
            <h3 className="share-title">Share</h3>
            <div className="event-url-container">
              <h4 className="event-url-title">Event URL</h4>
              <div className="event-url-value">
                https://www.eventbrite.com/e/test-tickets-580428867367
              </div>
              <div className="event-url-icons">
              </div>
            </div>
            <div className="quick-share-container">
              <h4 className="quick-share-title">Share on</h4>
              <div className="quick-share-icons">
              </div>  
            </div> 
        </div>
    );
}

export default Share;