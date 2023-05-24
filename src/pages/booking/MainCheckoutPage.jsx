import React, { useRef, useContext, useState } from "react";
import styles from "./MainCheckoutPage.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OrderSummary from "./OrderSummary";
import { CheckoutForm } from "./CheckoutForm";
import { AppContext } from "./GetTickets"
import { Timer } from "./Timer";


export function MainCheckoutPage({ event, ticketsType, setShowTimeoutMessage,
  setShowCloseMessage
  , setShowBackToTicketsMessage, setShowDonePage }) {


  console.log("MainCheckoutPage");
  const formikRef = useRef();
  const { selectedTickets } = useContext(AppContext);
  const [timer, setTimer] = useState(300);

  const handleSubmit = () => {
    if (formikRef.current) {
      console.log("test")
      console.log(formikRef.current)
      formikRef.current.handleSubmit()
    }
  }

  return (
    <>

      <div className={styles["booking"]} id="booking">
        <div className={styles["booking--content"]} id="booking--content">

          <div className={styles["content--header"]} id="content--header">
            <div className={styles["header--back-title-container"]} id="header--back-title-container">
              <div className="back-btn-container">
                <button className={styles["header--back-btn"]} onClick={() => { setShowBackToTicketsMessage(true) }} id="header--back-btn">
                  <ArrowBackIcon />
                </button>
              </div>
              <h2 className={styles["header--event-title"]} id="header--event-title">Checkout</h2>
            </div>
            <div className={styles["header--timer-container"]} id="header--timer-container">
              <Timer seconds={timer} setTimeOut={setShowTimeoutMessage} /> 
            </div>
          </div>

          <div className={styles["content--body"]} id="content--body">
            <div className={styles["body--tickets"]} id="body--tickets">
              <h3 className={styles["tickets--title"]} id="tickets--title">Billing information</h3>
              <CheckoutForm formikRef={formikRef} selectedTickets={selectedTickets} eventId={event._id} setShowDonePage={setShowDonePage} />

              <div className={styles["tickets--footer"]} id="tickets--footer">
                <span className={styles["footer--powered-by"]} id="footer--powered-by">Powered by </span>
                <span className={styles["footer--hebtus"]} id="footer--hebtus">hebtus</span>
              </div>
            </div>

          </div>

          <div className={styles["content--footer"]} id="content--footer">
            <div className={styles["footer--error-container"]} id="footer--error-container">

            </div>
            <div className={styles["chekout-btn-container"]} id="chekout-btn-container">
              <button className={styles["Register-btn"]} type="submit" onClick={() => { handleSubmit() }} id="Register-btn">Register</button>
            </div>
          </div>

        </div>

        <div className={styles["booking--side"]} id="booking--side">
          <div className={styles["side--event-image-container"]} id="side--event-image-container">
            <img src={event.img_url} alt="eventImage" className={styles["event-image"]} id="event-image" />
            <button className={styles["close-button"]} id='close-button' onClick={() => { setShowCloseMessage(true) }} >
              x
            </button>
          </div>

          <div className={styles["side--order-summary"]} id="side--order-summary">
            <OrderSummary ticketsType={ticketsType} />
          </div>

        </div>

      </div>
    </>
  )
}