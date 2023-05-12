import styles from "./RegistrationDonePage.module.css"
import { useNavigate } from "react-router-dom";

export function LoginMessage({ setCheckout, setModal }) {
  console.log("inside Login Message");
  const navigate = useNavigate();
  return (
    <div className={styles["page"]} id="page" >
      <p className={styles["page--title"]} id="page--title" >Please Log in first!</p>
      <div className={styles["page--content-container"]} id="page--content-container" >
        <p className={styles["page--content"]} id="page--content" >Tickets are available, but you need to log in first.</p>
        <div className={styles["page--buttons-containers"]} id="page--buttons-containers" >
          <button className={styles["page--button"]} onClick={() => { setCheckout(false); setModal(false); navigate("/login") }} id="page--button" >Login</button>
        </div>
      </div>
    </div>
  )
}