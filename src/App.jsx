
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
import PublishEvent from "./pages/publish-event/PublishEvent"
import EventDetails from "./pages/event-details/EventDetails";
import Booking from "./pages/booking/Booking";
import TicketsContainer from "./pages/booking/TicketsContainer";
export default function App() {

  let capacity = 20;
  let reserved = 16;
  let name = "Event Gamed ";
  let type = "VIP";
  let price = 100;
  let endDate = "2021-09-30T00:00:00.000Z";

  return (


    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event-dashboard/:eventId" element={<EventDashboard />} />
        <Route path="/events/:eventId" element={<PrivateOrPublicEvent />} />
        <Route path="/categorized/:filter/:longitude/:latitude" element={<CategorizedEvents />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPassordPage />} />
        <Route path="/events-list/" element={<EventListContainer />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/google-facebook-token/:token" element={<GoogleFacebookToken />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/publish-event" element={<PublishEvent />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tickets" element={<TicketsContainer name={name} type={type} price={price} capacity={capacity} reserved={reserved} endDate={endDate} />} />
      </Routes>
    </BrowserRouter>

  )

}

