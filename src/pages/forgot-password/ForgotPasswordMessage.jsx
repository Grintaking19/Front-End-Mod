import styles from "./ForgotPasswordMessage.module.css"
import { useNavigate } from "react-router-dom"
export default function ForgotPasswordMessage({ email }) {
  let navigate = useNavigate();
  return (
    <section className={styles['message-page']} id='message-page'>
      <div className={styles['message']} id='message'>
        <div>
            <p className={styles['message']} id="message--message-text-forgot-password">
            If an account exists for {email}, you will get an email with instructions on resetting your password, If it doesn't arrive, be sure to check your spam folder.
          </p>
        </div>
        <button className={styles['login-button']} id="message--button-forgot-password" onClick={() => {
            navigate("/login")
          }}>
          Back to Login
        </button>
      </div>
    </section>
  )
}