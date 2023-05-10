import styles from "./TimeOutPage.module.css"

export function TimeOutPage() {

  return (
    <div className={styles["Page"]}>
      <p className={styles["Page--title"]}>Time Limit Reached</p>
      <p className={styles["Page--content"]}>Your reservation has been released. Please re-start your purchase.</p>
      <button className={styles["Page--button"]}>Back to Tickets</button>

    </div>
  )
}