import react from "react"
import axios from "axios";
import "./sign-up.css"
import 'boxicons'
import googleLogo from "./assets/google-logo.png"
import signUpImg from "./assets/Log-in-img-part2.jpg"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useState } from "react";



const config = {
  headers: {
    "ngrok-skip-browser-warning": 1
  }
};

export default function SignUp({ setSuccess, setEmail }) {

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

  const schema = yup.object().shape({
    // name: yup.object({
    firstName: yup.string().required("First name is requried"),
    lastName: yup.string().required("Last name is requried"),
    //  }),
    email: yup.string().email().required("Email is required"),
    confirmEmail: yup.string().oneOf([yup.ref("email"), null], "Emails don't match").required(),
    password: yup.string().min(8).max(40).required("Passowrd is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    delete data.confirmEmail;
    console.log(data);
    try {
      const response = await axios.post("https://hebtus.me/api/v1/signup", data, config)
      console.log(response);
      setSuccess(true);
      setEmail(data.email);
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="signup-page">
      <section className="container">
        <div className="form signup">

          <h3 className="hebtus-logo">Hebtus</h3>
          <header>Create an account</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="field form--email">
              <input id="email" type="email" placeholder="Email"{...register("email")} className="email" />
            </div>
            <div className="form--error-message" id="form--error-message">
              <p className="error-message" id="errorMessageEmail"> {errors.email?.message}</p>
            </div>

            <div className="field form--email">
              <input type="email" placeholder="Confirm Email"{...register("confirmEmail")} className="email" />
            </div>
            <div className="form--error-message" id="form--error-message">
              <p className="error-message" id="errorMessageConfirmEmail"> {errors.confirmEmail?.message}</p>
            </div>

            <div className="form--name-container">
              <div className="name first-name">
                <input id="firstName" type="text" placeholder="First Name"{...register("name.firstName")} className="first-name" />
              </div>

              <div className="name last-name">
                <input id="lastName" type="text" placeholder="Last Name"{...register("name.lastName")} className="last-name" />
              </div>

            </div>

            <div className="form--name-container-errors">
              <div className="form--error-message" id="form--error-message">
                <p className="error-message" id="errorMessageFirstName"> {errors.firstName?.message}</p>
              </div>

              <div className="form--error-message" id="form--error-message">
                <p className="error-message" id="errorMessageLastName"> {errors.lastName?.message}</p>
              </div>

            </div>



            <div className="field form--password">
              <input type={passwordType} id="password" className="password" placeholder="Password"{...register("password")}
              />
              <div className="eye-holder" id="eyeHolderPassword" onClick={togglePassword}>
                {passwordType === "password" ?
                  <i class='bx bxs-hide eye-icon'></i>
                  :
                  <i class='bx bxs-show eye-icon'></i>
                }
              </div>
            </div>
            <div className="form--error-message" id="form--error-message">
              <p className="error-message" id="errorMessagePassword"> {errors.password?.message}</p>
            </div>


            <div className="field form--password">
              <input type={confirmPasswordType} id="confirmPassword" className="password" placeholder="Confirm Password"{...register("confirmPassword")}
              />
              <div className="eye-holder" id="eyeHolderConfirmPassword" onClick={toggleConfirmPassword}>
                {confirmPasswordType === "password" ?
                  <i class='bx bxs-hide eye-icon'></i>
                  :
                  <i class='bx bxs-show eye-icon'></i>
                }
              </div>
            </div>
            <div className="form--error-message" id="form--error-message">
              <p className="error-message" id="errorMessageConfirmPassword"> {errors.confirmPassword?.message}</p>
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
