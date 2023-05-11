import styles from "./RegistrationDonePage.module.css"


export function RegistrationDonePage({ setCheckout, setModal }) {
  console.log("inside RegistrationDonePage");
  return (
    <div className={styles["page"]}>
      <p className={styles["page--title"]}>Order placed</p>
      <div className={styles["page--content-container"]}>
        <p className={styles["page--content"]}>Check your email now, and contacts us if you have any problem.</p>
        <div className={styles["page--buttons-containers"]}>
          <button className={styles["page--button"]} onClick={() => { setCheckout(false); setModal(false); }}>Back to Event Page</button>
        </div>
      </div>
    </div>
  )
}