import styles from "./TimeOutPage.module.css"

export function BackToTicketsMessage({ setCheckout, setShowBackToTicketsMessage }) {

  return (
    <div className={styles["page"]}>
      <p className={styles["page--title"]}>Changed your mind?</p>
      <div className={styles["page--content-container"]}>
        <p className={styles["page--content"]}>Are you sure you want to leave checkout, and go back to ? The items you've selected may not be available later.</p>
        <div className={styles["page--buttons-containers"]}>
          <button className={styles["button-stay"]} onClick={()=>setShowBackToTicketsMessage(false)}>Stay</button>
          <button className={styles["button-leave"]} onClick={()=>setCheckout(false)}>Leave</button>
        </div>
      </div>
    </div>
  )
}