import "./forgot-password-message.css"
import { useNavigate } from "react-router-dom"
export default function SignUpMessage({ email }) {
  let navigate = useNavigate();
  return (
    <section className="Message-page" id="Message-page">
      <div className="Message" id="Message">
        <div>
          <p className="Message--text" id="Message--text">
            We sent you a confirmation email on {email}, If it doesn't arrive, be sure to check your spam folder.
          </p>
        </div>
        <div className="Message--login" id="Message--login">
          <a href="#" className="Login" id="Login" onClick={() => {
            navigate("/login")
          }}>Back to Log in</a>
        </div>
      </div>
    </section>
  )
}