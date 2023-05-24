import { useState, useEffect } from "react";
import styles from "./TicketsContainer.module.css"
import { Divider } from "@mui/material";


export default function TicketsContainer({ name, type, price, capacity, reserved, endDate, ticketId, ticketsType, setTicketsType }) {
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [maxAllowed, setMaxAllowed] = useState({ count: capacity - reserved, backgroundColor: "#3D64FF", color: "white" });
  const [minColor, setMinColor] = useState({ backgroundColor: "#EEEDF2", color: "#A9A8B3" });

  useEffect(() => {
    console.log(ticketQuantity);
    console.log(maxAllowed);
    // Create a copy of the state array
    const newArray = [...ticketsType];
    console.log(newArray);
    // Find the object with the specified id
    const ticketToUpdate = newArray.find((ticket) => ticket._id === ticketId);
    console.log(ticketToUpdate);
    // Update the properties of the object
    if (ticketToUpdate) {
      ticketToUpdate.sales = ticketQuantity;
    }
    // Set the modified array as the new state
    setTicketsType(newArray);
    console.log(newArray)
  }, [ticketQuantity, maxAllowed]);

  function increaseTicketQuantity() {
    if (maxAllowed.count > 0) {
      setTicketQuantity(prevTicketQuantity => prevTicketQuantity + 1);
      setMaxAllowed(prevMaxAllowed => ({ count: prevMaxAllowed.count - 1, backgroundColor: "#3D64FF", color: "white" }));
      setMinColor({ backgroundColor: "#3D64FF", color: "white" });
      if (maxAllowed.count === 1) {
        console.log("here");
        setMaxAllowed({ count: 0, backgroundColor: "#EEEDF2", color: "#A9A8B3" });
      }
    }

  }

  function decreaseTicketQuantity() {
    if (ticketQuantity > 0) {
      setTicketQuantity(prevTicketQuantity => prevTicketQuantity - 1);
      setMaxAllowed(prevMaxAllowed => ({ count: prevMaxAllowed.count + 1, backgroundColor: "#3D64FF", color: "white" }));
      if (ticketQuantity === 1) {
        setMinColor({ backgroundColor: "#EEEDF2", color: "#A9A8B3" });
      }
    } else {
      setMinColor({ backgroundColor: "#EEEDF2", color: "#A9A8B3" });
    }
  }

  return (
    <div className={styles["component"]} id="component">
      <div className={styles["container"]} style={{ borderColor: minColor.backgroundColor }} id="container">

        <div className={styles["container--reservation"]} id="container--reservation">

          <div className={styles["reservation--ticket-name"]} id="reservation--ticket-name">
            <h3 id="name-of-ticket">{name}</h3>
          </div>

          <div className={styles["reservation--ticket-quantity"]} id="reservation--ticket-quantity">
            <button className={styles["ticket-quantity--button"]} onClick={() => { decreaseTicketQuantity() }} style={{ backgroundColor: minColor.backgroundColor, color: minColor.color }} id="ticket-quantity--button-minus">-</button>
            <div>
              <span className={styles["ticket-quantity--value"]} id="ticket-quantity--value">{ticketQuantity}</span>
            </div>
            <button className={styles["ticket-quantity--button"]} onClick={() => { increaseTicketQuantity() }} style={{ backgroundColor: maxAllowed.backgroundColor, color: maxAllowed.color }} id="ticket-quantity--button-plus">+</button>
          </div>

        </div>
        <Divider></Divider>

        <div className={styles["reservation--price"]} id="reservation--price">
          <h3 id="ticket-price">{price ? '£' + price : `Free`}</h3>
        </div>

        <div className={styles["reservation--end-date"]} id="reservation--end-date">
          <h3 id="sales-end-date">Sales end on {endDate}</h3>
        </div>

        <div className={styles["reservation--ticket-type"]} id="reservation--ticket-type">
          <h3 id="ticket-type" >{type} Ticket</h3>
        </div>


      </div>
    </div>
  )
}