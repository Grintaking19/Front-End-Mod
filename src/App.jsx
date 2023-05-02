
import LandingPage from "./pages/landing-page/LandingPage"
import EventDashboard from "./pages/event-dashboard/EventDashboard"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategorizedEvents from "./pages/landing-page/events/CategorizedEvents";
import SignIn from "./pages/sign-in/SignIn"
import SignUpPage from "./pages/sign-up/SignUpPage"
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage"
import ResetPassordPage from "./pages/reset-password/ResetPassword"
import EventListContainer from "./pages/event-list/EventListContainer"
import CreateEvent from "./pages/create-event/CreateEvent"
import GoogleFacebookToken from "./pages/google-facebook-token/GoogleFacebookToken"
import { PrivateOrPublicEvent } from "./pages/event-page/PrivateOrPublicEvent"
import UpdatePassword from "./pages/update-password/UpdatePassword"


//Iam Marwan. Kindly can I commit like my friends?

export default function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event-dashboard/:eventId" element={<EventDashboard />} />
        <Route path="/events/:eventId" element={<PrivateOrPublicEvent />} />
        <Route path="/categorized/:filter/:longitude/:latitude" element={<CategorizedEvents/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPassordPage />} />
        <Route path="/events-list/" element={<EventListContainer />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/google-facebook-token/:token" element={<GoogleFacebookToken />} />
        <Route path="/update-password" element={<UpdatePassword/>} />
      </Routes>
    </BrowserRouter>

  )

}

