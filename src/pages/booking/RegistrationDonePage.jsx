import styles from "./RegistrationDonePage.module.css"


export function RegistrationDonePage({ setCheckout, setModal }) {
  console.log("inside RegistrationDonePage");
  return (
    <div className={styles["page"]} id="page">
      <p className={styles["page--title"]} id="page--title">Order placed</p>
      <div className={styles["page--content-container"]} id="page--content-container">
        <p className={styles["page--content"]} id="page--content">Check your email now, and contacts us if you have any problem.</p>
        <div className={styles["page--buttons-containers"]} id="page--buttons-containers">
          <button className={styles["page--button"]} onClick={() => { setCheckout(false); setModal(false); }} id="page--button">Back to Event Page</button>
        </div>
      </div>
    </div>
  )
}