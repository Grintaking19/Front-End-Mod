import "./forgot-password-message.css"
export default function ForgotPasswordMessage({ email }) {
  return (
    <section className="Message-page">
      <div className="Message">
        <div>
          <p className="Message--text">
            If an account exists for {email}, you will get an email with instructions on resetting your password, If it doesn't arrive, be sure to check your spam folder.
          </p>
        </div>
        <div className="Message--login">
          <a href="#" className="Login" >Back to Log in</a>
        </div>
      </div>
    </section>
  )
}