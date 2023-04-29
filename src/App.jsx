
import LandingPage from "./pages/landing-page/LandingPage"
import EventDashboard from "./pages/event-dashboard/EventDashboard"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import EventPage from "./pages/event-page/EventPage"

import CategorizedEvents from "./pages/landing-page/events/CategorizedEvents";
import SignIn from "./pages/sign-in/SignIn"
import SignUpPage from "./pages/sign-up/SignUpPage"
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage"
import ResetPassordPage from "./pages/reset-password/ResetPassword"
import EventListContainer from "./pages/event-list/EventListContainer"
import CreateEvent from "./pages/create-event/CreateEvent"
import GoogleFacebookToken from "./pages/google-facebook-token/GoogleFacebookToken"
//import { PrivateEventRegistration } from "./pages/event-page/PrivateEventRegistration"
import { PrivateOrPublicEvent } from "./pages/event-page/PrivateOrPublicEvent";
//import { useState } from "react";
export default function App() {
  //const [showEvent, setShowEvent] = useState("false")


  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event-dashboard/" element={<EventDashboard />} />
        <Route path="/events/:eventId" element={<PrivateOrPublicEvent />} />
        <Route path="/categorized/:filter/:latitude/:longitude" element={<CategorizedEvents/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPassordPage />} />
        <Route path="/events-list/" element={<EventListContainer />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/google-facebook-token/:token" element={<GoogleFacebookToken />} />
      </Routes>
    </BrowserRouter>

  )

}

