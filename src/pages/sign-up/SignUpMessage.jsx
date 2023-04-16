import styles from "./SignUpMessage.module.css"
import { useNavigate } from "react-router-dom"
export default function SignUpMessage({ email }) {
  let navigate = useNavigate();
  return (
    <section className={styles['Message-page']} id='Message-page'>
      <div className={styles.Message} id={styles.Message}>
        <div>
          <p className={styles['Message--text']} id='Message--text'>
            We sent you a confirmation email on {email}, If it doesn't arrive, be sure to check your spam folder.
          </p>
        </div>
        <div className={styles['Message--login']} id='Message--login'>
          <a href="#" className={styles.Login} id={styles.Login} onClick={() => {
            navigate("/login")
          }}>Back to Log in</a>
        </div>
      </div>
    </section>
  )
}