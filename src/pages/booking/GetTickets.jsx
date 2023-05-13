import React, { useState, useEffect, createContext } from "react";
import { getTicketsType } from "./service";
import { getEvent } from "../event-page/services";
import styles from "./GetTickets.module.css";
import { Booking } from "./Booking";
import { CheckoutPage } from "./CheckoutPage";
import { LoginMessage } from "./LoginMessage";
import { SoldoutMessage } from "./SoldoutMessage";


export const AppContext = createContext();

export function GetTickets({ event, modal, setModal }) {
  // const [modal, setModal] = useState(false);
  const [ticketsType, setTicketsType] = useState([]); // [ {name, type, price, capacity, reserved, endDate} ]
  // const [event, setEvent] = useState({});
  const [selectedTickets, setSelectedTickets] = useState([]); // [ {ticketId, quantity, price, sales} ]
  const [checkout, setCheckout] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [login, setLogin] = useState(true);

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
      // let eventRR = await getEvent(eventId);
      // console.log("this is after get event");
      // console.log(eventRR.eventData);

      // setEvent(eventRR.eventData);

      if (localStorage.getItem("user") === "") {
        setLogin(false);
      }
      else {
        let tickets = await getTicketsType(event._id);
        console.log(tickets);
        if (tickets.length === 0) {
          setSoldOut(true);
        }
        let copyTickets = [...tickets];
        copyTickets.forEach(ticket => {
          ticket.sellingEndTime = new Date(ticket.sellingEndTime).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
          ticket.sales = 0;
        });
        setTicketsType(copyTickets);
        //User Not Logged In
      }
    }
    fetchTickets();
  }, [])


  return (
    <>
      <AppContext.Provider value={{ selectedTickets, setSelectedTickets }}>

        {modal && (
          <div className={styles["modal"]}>
            <div onClick={() => {
              if (!checkout) { //if chekcout is 1 then you can't close the modal from the overlay
                setModal(false);
                setCheckout(false);
              }
            }} className={styles["overlay"]}></div>
            <div className={styles["modal-content"]}>
              {/* REFACTOR THIS !!!!1 */}
              {
                login ?
                  (
                    !soldOut ?
                      (
                        !checkout ?
                          <Booking event={event} ticketsType={ticketsType} setTicketsType={setTicketsType} checkout={checkout} setCheckout={setCheckout} setModal={setModal} />
                          :

                          <CheckoutPage event={event} ticketsType={ticketsType} setCheckout={setCheckout} setModal={setModal} checkout={checkout} />
                      )
                      :
                      <SoldoutMessage setCheckout={setCheckout} setModal={setModal} />
                  )
                  :
                  <LoginMessage setCheckout={setCheckout} setModal={setModal} />
              }

            </div>
          </div>
        )}
      </AppContext.Provider>
    </>
  )
}