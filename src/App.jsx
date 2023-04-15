
import LandingPage from "./pages/landing-page/LandingPage"
import EventDashboard from "./pages/event-dashboard/EventDashboard"
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import EventPage from "./pages/event-page/EventPage"


export default function App() {


  return (

    // <EventDashboard /> 

    // <LandingPage/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/event-dashboard" element={<EventDashboard/>} />
        <Route path="/events/:eventId" element={<EventPage/>} />
      </Routes>
    </BrowserRouter>

  )

}

