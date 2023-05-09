import React, { useState, useEffect } from "react";
import { getTicketsType } from "./service";
import { getEvent } from "../event-page/services";
import styles from "./Booking.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TicketsContainer from "./TicketsContainer";
import ErrorIcon from '@mui/icons-material/Error';
import OrderSummary from "./OrderSummary";
export default function Booking({ eventId }) {
  const [modal, setModal] = useState(false);
  const [ticketsType, setTicketsType] = useState([]); // [ {name, type, price, capacity, reserved, endDate} ]
  const [event, setEvent] = useState({});
  const [errorEmpty, setErrorEmpty] = useState("");
  const [checkout, setCheckout] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(() => {
    async function fetchTickets() {
      let eventRR = await getEvent(eventId);
      // console.log("this is after get event");
      // console.log(eventRR.eventData);

      setEvent(eventRR.eventData);
      let tickets = await getTicketsType(eventRR.eventData._id);
      console.log(tickets);
      let copyTickets = [...tickets];
      copyTickets.forEach(ticket => {
        ticket.sellingEndTime = new Date(ticket.sellingEndTime).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        ticket.sales = 0;
      });
      setTicketsType(copyTickets);
      // console.log(ticketsType);
    }
    fetchTickets();
  }, [])

  function checkIfAnySelected(ticketsType) {
    return ticketsType.some(ticket => ticket.sales > 0);
  }

  function checkoutSubmit(ticketsType) {
    if (checkIfAnySelected(ticketsType)) {
      setCheckout(true);
      setErrorEmpty("");
    }
    else {
      setCheckout(false);
      setErrorEmpty("Add at least 1 ticket");
    }
  }

  return (
    <>
      <button onClick={toggleModal} className={styles["btn-modal"]}>
        Open
      </button>

      {modal && (
        <div className={styles["modal"]}>
          <div onClick={() => {
            setModal(false);
            setCheckout(true);
            setErrorEmpty("");
          }} className={styles["overlay"]}></div>
          <div className={styles["modal-content"]}>
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
                    <div className={styles["error-empty"]}><ErrorIcon className={styles["error-empty--icon"]} /> {errorEmpty}</div>
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
                </div>

                <div className={styles["side--order-summary"]}>
                    <OrderSummary ticketsType={ticketsType} />
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </>
  )
}