
import LandingPage from "./pages/landing-page/LandingPage"
import EventDashboard from "./pages/event-dashboard/EventDashboard"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from "./pages/event-page/EventPage"

import CategorizedEvents from "./pages/landing-page/events/CategorizedEvents";
// import SignIn from "./pages/sign-in/SignIn"
// import SignUpPage from "./pages/sign-up/SignUpPage"
// import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage"
// import ResetPassordPage from "./pages/reset-password/ResetPassword"
import EventListContainer from "./pages/event-list/EventListContainer"

export default function App() {


  return (

    // <EventDashboard /> 

    // <LandingPage/>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event-dashboard" element={<EventDashboard />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/categorized/:filter/:latitude/:longitude" element={<CategorizedEvents/>} />
        {/* <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPassordPage />} /> */}
        <Route path="/events" element={<EventListContainer />} />
      </Routes>
    </BrowserRouter>

  )

}

