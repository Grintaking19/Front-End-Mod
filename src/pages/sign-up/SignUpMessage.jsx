import styles from "./SignUpMessage.module.css"
import { useNavigate } from "react-router-dom"
export default function SignUpMessage({ email }) {
  let navigate = useNavigate();
  return (
    <section className={styles['message-page']} id='message-page'>
      <div className={styles['message']} id="message">
        <div>
          <p className={styles['message--text']} id='message--text'>
            We sent you a confirmation email on {email}, If it doesn't arrive, be sure to check your spam folder.
          </p>
        </div>
        <button className={styles['login-button']} id="message--button-login" onClick={() => {
            navigate("/login")
          }}>
          Back to Login
        </button>
      </div>
    </section>
  )
}