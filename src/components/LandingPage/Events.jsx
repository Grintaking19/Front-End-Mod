import React from "react";
import "./styles/Events.css"
import mockUpEvents from "./mockup-events.json"




export default function Events()
{

const testEvents=mockUpEvents.map((event)=>{
  return (
    <div class="col">
          <div class="card shadow-sm">
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#F8F7FA"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg> */}
            <img src={event.img_url} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div class="card-body">
                <h4 class="event-card--name">{event.eventName}</h4>
                 <h6 class="event-card--date" >{event.startTime.substring(0, event.startTime.indexOf(' '))}</h6>
                <h6 >{event.locationName}</h6>
                <h6 >Starts at $10</h6>
                 
            </div>
          </div>
        </div>
  )
})


return (
    
    <div>
    

    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
       {testEvents}
      </div>
    </div>
  </div>



  </div>
)

}