import React, { useState, useEffect } from "react";
import { getTicketsType } from "./service";
import { getEvent } from "../event-page/services";
import styles from "./Booking.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TicketsContainer from "./TicketsContainer";
// let name =  ticketType.name ;
// let type = ticketType.type;
// let price = ticketType.price
// let capacity = ticketType.capacity
// let reserved = ticketType.currentReservations
// let endDate = ticketType.sellingEndTime
// let sales = ticketType.sales;

export default function Booking({ eventId }) {
  const [modal, setModal] = useState(false);
  const [ticketsType, setTicketsType] = useState([]); // [ {name, type, price, capacity, reserved, endDate} ]
  const [event, setEvent] = useState({});
  //<TicketsContainer name={name} type={type} price={price} capacity={capacity} reserved={reserved} endDate={endDate} />
  // let capacity = 20;
  // let reserved = 16;
  // let name = "Event Gamed ";
  // let type = "VIP";
  // let price = 100;
  // let endDate = "2021-09-30T00:00:00.000Z";

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
      let event = await getEvent(eventId);
      // let StartDateDay = new Date(event.startDate);
      // event.StartDateDay = StartDateDay.
      setEvent(event);
      let tickets = await getTicketsType(event.eventid);
      tickets.array.forEach(ticket => {
        ticket.sellingEndTime = new Date(ticket.sellingEndTime).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        ticket.sales = 0;
      });
      setTicketsType(tickets);
      console.log(ticketsType);
    }
    fetchTickets();
  }, [])

  return (
    <>
      <button onClick={toggleModal} className={styles["btn-modal"]}>
        Open
      </button>

      {modal && (
        <div className={styles["modal"]}>
          <div onClick={toggleModal} className={styles["overlay"]}></div>
          <div className={styles["modal-content"]}>
            <div className={styles["booking"]}>
              <div className={styles["booking--content"]}>

                <div className={styles["content--header"]}>

                  <p className={styles["header--event-title"]}>{event.eventName}</p>
                  <p className={styles["header--event-date"]}>{`${(new Date(event.startDate)).toLocaleDateString('en-US', { weekday: 'long' })}, ${event.startMonthInWords} ${event.startDay} · ${event.startHour} - ${event.endHour}`}</p>

                </div>

                <div className={styles["content--body"]}>
                  <div className={styles["body--tickets"]}>
                    <h3 className={styles["tickets--title"]}>Tickets</h3>
                    {ticketsType.map(ticketType => (
                      <TicketsContainer name={ticketType.name} type={ticketType.type} price={ticketType.price} capacity={ticketType.capacity}
                        reserved={ticketType.currentReservations} endDate={ticketType.sellingEndTime} ticketId={ticketType._id} setTicketType={setTicketsType} />
                    ))}

                    <div className={styles["tickets--footer"]}>
                      <span className={styles["footer--powered-by"]}>Powered by </span>
                      <span className={styles["footer--hebtus"]}>hebtus</span>
                    </div>
                  </div>

                </div>

                <div className={styles["content--footer"]}>
                  <div className={styles["chekout-btn-container"]}>
                    <button className={styles["footer--checkout-btn"]}>Checkout</button>
                  </div>
                </div>

              </div>

              <div className={styles["booking--side"]}>
                <div className={styles["side--event-image-container"]}>
                  <img src={event.eventImage} alt="eventImage" className={styles["event-image"]} />
                </div>

                <div className={styles["side--order-summary"]}>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </>
  )
}