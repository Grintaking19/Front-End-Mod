import styles from "./Booking.module.css"
import TicketsContainer from "./TicketsContainer"
import { useState } from "react"
import OrderSummary from "./OrderSummary"
import ErrorIcon from '@mui/icons-material/Error';


export function Booking({event, ticketsType, setTicketsType, checkout, setCheckout,setModal}) {
  const [errorEmpty, setErrorEmpty] = useState("");
  
  
  function checkIfAnySelected(ticketsType) {
    return ticketsType.some(ticket => ticket.sales > 0);
  }  
  
  function checkoutSubmit(ticketsType) {
    if (checkIfAnySelected(ticketsType)) {
      setCheckout(true);
      console.log("checkout is true");
      setErrorEmpty("");
    }
    else {
      setCheckout(false);
      setErrorEmpty("Add at least 1 ticket");
    }
  }

  



  return (
    <div className={styles["booking"]}>
      <div className={styles["booking--content"]}>

        <div className={styles["content--header"]}>

          <p className={styles["header--event-title"]}>{event.name}</p>
          <p className={styles["header--event-date"]}>{`${(new Date(event.startDate)).toLocaleDateString('en-US', { weekday: 'long' })}, ${event.startMonthInWords} ${event.startDay} · ${event.startHour} - ${event.endHour}`}</p>

        </div>

        <div className={styles["content--body"]}>
          <div className={styles["body--tickets"]}>
            <h3 className={styles["tickets--title"]}>Tickets</h3>
            {ticketsType.map(ticketType => (
              <TicketsContainer name={ticketType.name} type={ticketType.type} price={ticketType.price} capacity={ticketType.capacity}
                reserved={ticketType.currentReservations} endDate={ticketType.sellingEndTime} ticketId={ticketType._id} ticketsType={ticketsType} setTicketsType={setTicketsType} />
            ))}

            <div className={styles["tickets--footer"]}>
              <span className={styles["footer--powered-by"]}>Powered by </span>
              <span className={styles["footer--hebtus"]}>hebtus</span>
            </div>
          </div>

        </div>

        <div className={styles["content--footer"]}>
          <div className={styles["footer--error-container"]}>
            {!checkout &&
              <div className={styles["error-empty"]}>
                {errorEmpty ==="" ? "":<ErrorIcon className={styles["error-empty--icon"]} />}{errorEmpty}</div>
            }
          </div>
          <div className={styles["chekout-btn-container"]}>
            <button className={styles["footer--checkout-btn"]} onClick={() => { checkoutSubmit(ticketsType) }}>Checkout</button>
          </div>
        </div>

      </div>

      <div className={styles["booking--side"]}>
        <div className={styles["side--event-image-container"]}>
          <img src={event.img_url} alt="eventImage" className={styles["event-image"]} />
          <button className={styles["close-button"]} id='close-button' onClick={() => { setModal(false) }}>
            x
          </button>
        </div>

        <div className={styles["side--order-summary"]}>
          <OrderSummary ticketsType={ticketsType}/>
        </div>

      </div>

    </div>
  )
}