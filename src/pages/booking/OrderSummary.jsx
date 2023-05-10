import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect, useState, useContext } from 'react';
import styles from "./OrderSummary.module.css"
import { Divider } from "@mui/material";
import {AppContext} from "./GetTickets"
export default function OrderSummary({ ticketsType }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const {selectedTickets , setSelectedTickets} = useContext(AppContext); 
  
  function getSeletedTickets(ticketsType) {
    let ticketsTypeSales = ticketsType.filter(ticket => {
      return ticket.sales > 0;
    })
    let selectedTickets = ticketsTypeSales.map(ticket => {
      return { name: ticket.name, sales: ticket.sales, price: ticket.price, ticketId: ticket._id }
    })
    console.log(selectedTickets);
    setSelectedTickets(selectedTickets);
  }

  useEffect(() => {
    if (ticketsType.some(ticket => ticket.sales > 0)) {
      setIsEmpty(false);
      getSeletedTickets(ticketsType);
    }
    else {
      setIsEmpty(true);
    }
  }, [ticketsType]);

  return (
    < div className={styles["summary-container"]} >
      {
        isEmpty ?
          <div className={styles["empty-summary-report"]}>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
          :
          <div className={styles["full-summary-report"]} id="full-summary-report">
            <h3 className={styles["summary-report--title"]} id="summary-report--title">Order Summary</h3>
            <div className={styles["summary-report--container"]} id="summary-report--container">
              {
                selectedTickets.map(ticket => {
                  return (
                    <div className={styles["summary-report--ticket-container"]} id="summary-report--ticket-container" >
                      <p className={styles["ticket-container--ticket-sales-name"]} id="ticket-container--ticket-sales-name">{ticket.sales} x {ticket.name}</p>
                      <p className={styles["ticket-container--ticket-price"]} id="ticket-container--ticket-price">${ticket.price * ticket.sales}</p>
                    </div>
                  )
                })
              }
              <Divider className={styles["summary-report--divider"]} id="summary-report--divider" />
              <div className={styles["summary-report--total-container"]} id="summary-report--total-container">
                <p className={styles["total-container--total-text"]} id="total-container--total-text">Total</p>
                <p className={styles["total-container--total-price"]} id="total-container--total-price">${selectedTickets.reduce((total, ticket) => total + ticket.sales * ticket.price, 0)}</p>
              </div>
            </div>
          </div>
      }
    </div >

  )
}