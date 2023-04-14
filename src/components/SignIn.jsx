import react from "react"
import "./styles/SignIn.css"
import 'boxicons'
import googleLogo from "../assets/google-logo.png"
import logInImg from "../assets/Log-in-img-part2.jpg"
import axios from "axios"

import { useState } from "react";


const config = {
    "ngrok-skip-browser-warning": 1,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, *',
    credentials: true,
    // preflightContinue: true,
    optionsSuccessStatus: 204,

};

export default function SignIn() {``

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://778d-156-222-12-177.ngrok-free.app/api/v1/login", {
        "email": data.email,
        "password": data.password
      }, config)
      console.log(response);
    }
    catch (err) {
      console.log(err);
    }

  }

  async function updatePassword(e) {
    e.preventDefault();
    try {
      console.log("lol");
      const response = await axios.patch("https://778d-156-222-12-177.ngrok-free.app/api/v1/updatepassword",
        {
          "passwordCurrent": "123456789",
          "password": "kambotchas",
          "confirmPassword": "kambotchas"
        }
        , config)
      console.log(response);
    }
    catch (err) {
      console.log(err);
    }

  }


  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    console.log(newData);
  }

  return (
    <div className="login-page">
      <section className="container">
        <div className="form login">

          <h3 className="hebtus-logo">Hebtus</h3>
          <header>Log in</header>

          <form action="#" onSubmit={(e) => submit(e)}>
            <div className="field form--email">
              <input onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Email" className="email" />
            </div>


            <div className="field form--password">
              <input type={passwordType} id="password" className="password" placeholder="Password"
                onChange={(e) => handle(e)}
                value={data.password}
              />
              <div className="eye-holder" id="eyeHolderPassword" onClick={togglePassword}>
                {passwordType === "password" ?
                  <i class='bx bxs-hide eye-icon'></i>
                  :
                  <i class='bx bxs-show eye-icon'></i>
                }
              </div>
            </div>

            <div className="form-link form--forgot-password">
              <a href="#" className="fogot-password" id="fogot-password">Forgot Passowrd</a>
            </div>

            <div className="field form--button" id="CreateAccount">
              <button type="submit">Log in</button>
            </div>

            <div className="form-link form--signup">
              <span>Don't have an account? <a href="#" className="sign-up" id="form-link from--signup">Sign up</a></span>
            </div>

            <div className="line"></div>

            <div className="form--media-options">
              <a href="#" id="signInFacebook" className="field facebook" onClick={(e) => { updatePassword(e) }}>
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Sign In with Facebook</span>
              </a>
            </div>

            <div className="form--media-options">
              <a href="#" id="signInGoogle" className="field google">
                <img src={googleLogo} alt="" className="google-img" />
                <span>Sign In with Google</span>
              </a>
            </div>

          </form>

        </div>


      </section>

      <div className="login-page-image">
        <img src={logInImg} alt="event-image" className="login-image" />
      </div>

    </div>
  )


}
