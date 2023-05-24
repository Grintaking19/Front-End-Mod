import styles from "./TimeOutPage.module.css"

export function TimeOutPage({setCheckout}) {
  console.log("inside timeout page");
  return (
    <div className={styles["page"]} id ="page">
      <p className={styles["page--title"]} id="page--title">Time Limit Reached</p>
      <p className={styles["page--content"]} id="page--content">Your reservation has been released. Please re-start your purchase.</p>
      <button className={styles["page--button"]} onClick={() => { setCheckout(false) }} id="page--button">Back to Tickets</button>

    </div>
  )
}