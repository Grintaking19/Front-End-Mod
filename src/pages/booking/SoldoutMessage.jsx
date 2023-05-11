import styles from "./TimeOutPage.module.css"

export function SoldoutMessage({ setCheckout }) {
  console.log("inside timeout page");
  return (
    <div className={styles["page"]}>
      <p className={styles["page--title"]}>Oops, Looks like tickets are sold out!</p>
      <p className={styles["page--content"]}>Contact Us to keep you updated with different events</p>
      <button className={styles["page--button"]} onClick={() => { setCheckout(false) }}>Back to EventPage</button>

    </div>
  )
}