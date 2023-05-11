import styles from "./TimeOutPage.module.css"

export function TimeOutPage({setCheckout}) {
  console.log("inside timeout page");
  return (
    <div className={styles["page"]}>
      <p className={styles["page--title"]}>Time Limit Reached</p>
      <p className={styles["page--content"]}>Your reservation has been released. Please re-start your purchase.</p>
      <button className={styles["page--button"]} onClick={() => { setCheckout(false) }}>Back to Tickets</button>

    </div>
  )
}