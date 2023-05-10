import React, { useState, useEffect } from "react";
import { getTicketsType } from "./service";
import { getEvent } from "../event-page/services";
import styles from "./Booking.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OrderSummary from "./OrderSummary";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

{/* <div className={styles["form--group"]}>
                        <div className={styles["group--first-name"]}>
                          <input id="firstName" type="text" placeholder="First Name" {...register("name.firstName")} className={styles["first-name"]} />
                          <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="first-name--error-container">
                            <p className={styles["error-message"]} id="errorMessageFirstName">{errors.firstName?.message}</p>
                          </div>
                        </div>
                        
                        <div className={styles["group--last-name"]}>
                          <input id="lastName" type="text" placeholder="First Name" {...register("name.firstName")} className={styles["first-name"]} />
                          <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="last-name--error-container">
                            <p className={styles["error-message"]} id="errorMessageLastName">{errors.lastName?.message}</p>
                          </div>
                        </div>
                        
                        <div className={styles["group--email"]}>
                          <input id="email" type="email" placeholder="Email" {...register("email")} className={styles.email} />
                          <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="email--error-container">
                            <p className={styles["error-message"]} id="errorMessageEmail">{errors.email?.message}</p>
                          </div>
                        </div>
                        
                        <div className={styles["group--confirm-email"]}>
                          <input type="confirmEmail" placeholder="Confirm Email" {...register("confirmEmail")} className={styles.email} />
                          <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="confirm-email--error-container">
                            <p className={styles["error-message"]} id="errorMessageConfirmEmail">{errors.confirmEmail?.message}</p>
                          </div>
                        </div>
                      </div>

                      <div className={styles["group--phone"]}>
                        <input type="emai" placeholder="Confirm Email" {...register("confirmEmail")} className={styles.email} />
                        <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="last-name--error-container">
                          <p className={styles["error-message"]} id="errorMessagePhone">{errors.confirmEmail?.message}</p>
                        </div>
                      </div> */}

                      
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

  const schema = yup.object().shape({
    name: yup.object({
      firstName: yup.string().required("First name is requried"),
      lastName: yup.string().required("Last name is requried"),
    }),
    email: yup.string().email().required("Email is required"),
    confirmEmail: yup.string().oneOf([yup.ref("email"), null], "Emails don't match").required(),
    phone: yup.number().min(10).max(11).required("Phone is required"),
    gender: yup.boolean().required().oneOf([0, 1], 'Select a gender'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


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
                  <div className={styles["header--back-title-container"]}>
                    <button className={styles["header--back-btn"]} onClick={() => { }}>
                      <ArrowBackIcon />
                    </button>
                    <h2 className={styles["header--event-title"]}>Checkout</h2>
                  </div>
                  <div className={styles["header--timer-container"]}>

                  </div>
                </div>

                <div className={styles["content--body"]}>
                  <div className={styles["body--tickets"]}>
                    <h3 className={styles["tickets--title"]}>Billing information</h3>
                    <form action="#" >
                      

                    </form>

                    <div className={styles["tickets--footer"]}>
                      <span className={styles["footer--powered-by"]}>Powered by </span>
                      <span className={styles["footer--hebtus"]}>hebtus</span>
                    </div>
                  </div>

                </div>

                <div className={styles["content--footer"]}>
                  <div className={styles["footer--error-container"]}>

                  </div>
                  <div className={styles["chekout-btn-container"]}>
                    <button className={styles["footer--checkout-btn"]} onClick={() => { checkoutSubmit(ticketsType) }}>Register</button>
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