import styles from "./ForgotPassword.module.css"
export default function ForgotPasswordMessage({ email }) {
  return (
    <section className={styles['Message-page']} id='Message-page'>
      <div className={styles.Message} id={styles.Message}>
        <div>
            <p className={styles['Message--text']} id="Message--message-text-forgot-password">
            If an account exists for {email}, you will get an email with instructions on resetting your password, If it doesn't arrive, be sure to check your spam folder.
          </p>
        </div>
        <div className={styles['Message--login']} id='Message--login'>
          <a href="#" className={styles.Login} id="Message--login-link" >Back to Log in</a>
        </div>
      </div>
    </section>
  )
}