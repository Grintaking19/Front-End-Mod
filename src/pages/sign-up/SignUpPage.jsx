import { useState } from "react"
import SignUp from "./SignUp.jsx";
import SignUpMessage from "./SignUpMessage.jsx";


export default function ForgotPasswordPage() {
  const [showMessage, setShowMessage] = useState(false)
  const [email, setEmail] = useState("")


  return (
    <div>
      {showMessage ? (
        <SignUpMessage email={email} />
      ) : (
        <SignUp setSuccess={setShowMessage} setEmail={setEmail} />
      )}
    </div>
  )
}
