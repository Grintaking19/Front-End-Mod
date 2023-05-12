import styles from "./TimeOutPage.module.css"

export function SoldoutMessage({ setCheckout,setModal }) {
  console.log("inside timeout page");
  return (
    <div className={styles["page"]} id ="page">
      <p className={styles["page--title"]} id="page--title">Oops, Looks like tickets are sold out!</p>
      <p className={styles["page--content"]} id="page--content">Contact Us to keep you updated with different events</p>
      <button className={styles["page--button"]} onClick={() => { setCheckout(false); setModal(false) }} id="page--button">Back to EventPage</button>

    </div>
  )
}