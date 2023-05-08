import { useState,useEffect } from "react";
import styles from "./TicketsContainer.module.css"
import { Divider } from "@mui/material";


export default function TicketsContainer({ name, type, price, capacity, reserved, endDate }) {
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [maxAllowed, setMaxAllowed] = useState({ count: capacity - reserved, backgroundColor: "#3D64FF", color: "white" });
  const [minColor, setMinColor] = useState({ backgroundColor: "#EEEDF2", color: "#A9A8B3" });

  useEffect(() => {
    console.log(ticketQuantity);
    console.log(maxAllowed);
  }, [ticketQuantity,maxAllowed]);

  function increaseTicketQuantity() {
    if (maxAllowed.count > 0) {
      setTicketQuantity(prevTicketQuantity => prevTicketQuantity + 1);
      setMaxAllowed(prevMaxAllowed => ({ count: prevMaxAllowed.count - 1, backgroundColor: "#3D64FF", color: "white" }));
      setMinColor({ backgroundColor: "#3D64FF", color: "white" });
      if (maxAllowed.count === 1) {
        console.log("here");
        setMaxAllowed({count:0 ,backgroundColor: "#EEEDF2", color: "#A9A8B3" });
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
    <div className={styles["component"]}>
      <div className={styles["container"]} style={{ borderColor: minColor.backgroundColor }}>

        <div className={styles["container--reservation"]}>

          <div className={styles["reservation--ticket-name"]}>
            <h3>{name}</h3>
          </div>

          <div className={styles["reservation--ticket-quantity"]}>
            <button className={styles["ticket-quantity--button"]} onClick={() => { decreaseTicketQuantity() }} style={{backgroundColor:minColor.backgroundColor, color:minColor.color}}>-</button>
            <div>
              <span className={styles["ticket-quantity--value"]}>{ticketQuantity}</span>
            </div>
            <button className={styles["ticket-quantity--button"]} onClick={() => { increaseTicketQuantity() }} style={{ backgroundColor: maxAllowed.backgroundColor, color: maxAllowed.color }}>+</button>
          </div>

        </div>
        <Divider></Divider>

        <div className={styles["reservation--price"]}>
          <h3>${price}</h3>
        </div>

        <div className={styles["reservation--end-date"]}>
          <h3>Sales end on {endDate}</h3>
        </div>

        <div className={styles["reservation--ticket-type"]}>
          <h3>{type} Ticket</h3>
        </div>


      </div>
    </div>
  )
}