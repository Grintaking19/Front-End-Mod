import { useState, useEffect } from "react"
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordMessage from "./ForgotPasswordMessage";


export default function ForgotPasswordPage() {
  const [showMessage, setShowMessage] = useState(false)
  const [email, setEmail] = useState("")


  return (
    <div>
      {showMessage ? (
        <ForgotPasswordMessage email={email} />
      ) : (
        <ForgotPassword setSuccess={setShowMessage} setEmail={setEmail} />
      )}
    </div>
  )
}
