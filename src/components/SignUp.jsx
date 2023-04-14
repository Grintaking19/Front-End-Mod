import react from "react"
import axios from "axios";
import "./styles/SignUp.css"
import 'boxicons'
import googleLogo from "../assets/google-logo.png"
import signUpImg from "../assets/Log-in-img-part2.jpg"


import { useState } from "react";



const config = {
  headers: {
    "ngrok-skip-browser-warning": 1
  }
};

export default function SignUp() {

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text")
      return;
    }
    setConfirmPasswordType("password")
  }

  const [data, setData] = useState({
    name: {
      firstName: "",
      lastName: ""
    },
    email: "",
    password: "",
    confirmPassword: ""

  })

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("api/v1/signup", {
        "name": {
          firstName: data.name.firstName,
          lastName: data.name.lastName
        },
        "email": data.email,
        "password": data.password,
        "confirmPassword": data.confirmPassword
      }, config)
      console.log(response);
    }
    catch (err) {
      console.log(err);
    }
    // let lol = await fetch(
    //   "http://16.170.37.222//api/v1/signup",
    //   {

    //     method: "POST",
    //     headers: {
    //       "ngrok-skip-browser-warning": 1,
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     },
    //     mode: "no-cors",
    //     body: JSON.stringify({
    //       name: {
    //         firstName: "lolaaaat",
    //         lastName: "loleeeeen",
    //       },
    //       email: "hehehehehhe@gmail.com",
    //       password: "123456789",
    //       confirmPassword: "123456789",
    //     }),
    //   }
    // );
    // console.log(lol);

  }


  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    console.log(newData);
  }


  return (
    <div className="signup-page">
      <section className="container">
        <div className="form signup">

          <h3 className="hebtus-logo">Hebtus</h3>
          <header>Create an account</header>

          <form action="#" onSubmit={(e) => submit(e)}>
            <div className="field form--email">
              <input onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Email" className="email" />
            </div>

            <div className="field form--email">
              <input type="email" placeholder="Confirm Email" className="email" />
            </div>

            <div className="form--name-container">
              <div className="name first-name">
                <input onChange={(e) => { data.name.firstName = e.target.value }} id="firstName" value={data.name.firstname} type="text" placeholder="First Name" className="first-name" />
              </div>

              <div className="name last-name">
                <input onChange={(e) => { data.name.lastName = e.target.value }} id="lastName" value={data.name.lastname} type="text" placeholder="Last Name" className="last-name" />
              </div>

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


            <div className="field form--password">
              <input type={confirmPasswordType} id="confirmPassword" className="password" placeholder="Confirm Password"
                onChange={(e) => handle(e)}
                value={data.confirmPassword}
              />
              <div className="eye-holder" id="eyeHolderConfirmPassword" onClick={toggleConfirmPassword}>
                {confirmPasswordType === "password" ?
                  <i class='bx bxs-hide eye-icon'></i>
                  :
                  <i class='bx bxs-show eye-icon'></i>
                }
              </div>
            </div>


            <div className="field form--button" id="CreateAccount">
              <button type="submit">Create account</button>
            </div>

            <div className="form-link form--signup">
              <span>Aready have an account? <a href="#" id="SignIn" className="sign-up">Sign in</a></span>
            </div>

            <div className="line"></div>

            <div className="form--media-options">
              <a href="#" id="signUpFacebook" className="field facebook">
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Sign up with Facebook</span>
              </a>
            </div>

            <div className="form--media-options">
              <a href="#" id="signUpGoogle" className="field google">
                <img src={googleLogo} alt="" className="google-img" />
                <span>Sign up with Google</span>
              </a>
            </div>

          </form>

        </div>


      </section>

      <div className="signup-page-image">
        <img src={signUpImg} id="signupPageImage" alt="event-image" className="signup-image" />
      </div>

    </div>
  )


}
