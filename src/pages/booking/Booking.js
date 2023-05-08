import React, { useState } from "react";
import styles from "./Booking.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TicketsContainer from "./TicketsContainer";

export default function Modal() {
  const [modal, setModal] = useState(false);
  //<TicketsContainer name={name} type={type} price={price} capacity={capacity} reserved={reserved} endDate={endDate} />
  let capacity = 20;
  let reserved = 16;
  let name = "Event Gamed ";
  let type = "VIP";
  let price = 100;
  let endDate = "2021-09-30T00:00:00.000Z";
  
  
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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

                  <p className={styles["header--event-title"]}>Book Tickets</p>
                  <p className={styles["header--event-date"]}>Event Date</p>
                
                </div>

                <div className={styles["content--body"]}>
                  <div className={styles["body--tickets"]}>
                    <h3 className={styles["tickets--title"]}>Tickets</h3>
                    <TicketsContainer name={name} type={type} price={price} capacity={capacity} reserved={reserved} endDate={endDate} />
                  </div>

                </div>

                <div className={styles["content--footer"]}>
                  <div className = {styles["chekout-btn-container"]}>
                    <button className={styles["footer--checkout-btn"]}>Checkout</button>
                  </div>
                </div>

              </div>

              <div className={styles["booking--side"]}>
                <div className={styles["side--event-image"]}>

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