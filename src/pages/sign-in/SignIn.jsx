import react from "react"
import "./sign-in.css"
import 'boxicons'
import googleLogo from "./assets/google-logo.png"
import logInImg from "./assets/Log-in-img-part2.jpg"
import axios from "axios"
import { useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom';

/////////////////////////////////////////////////////////
function authHeader() {
  const user = localStorage.getItem('user');
  if (user) {
    return { token: `${user}` };
  } else {
    return {};
  }
}

const config = {
  headers: authHeader()
};


/////////////////////////////////////////////////////////
export default function SignIn() {

  const [passwordType, setPasswordType] = useState("password");
  let navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(40).required("Passowrd is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      const response = await axios.post("https://hebtus.me/api/v1/login", data, config)
      console.log(response);
      if (response.data.token) {
        localStorage.setItem('user', response.data.token);
      }
      console.log(localStorage.getItem('user'));
      navigate("/");
    }
    catch (err) {
      console.log(err);
    }
  }


  
  return (
    <div className="login-page">
      <section className="container">
        <div className="form login">

          <h3 className="hebtus-logo">Hebtus</h3>
          <header>Log in</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="field form--email">
              <input id="email" type="email" placeholder="Email"{...register("email")} className="email" />
            </div>
            <div className="form--error-message" id="form--error-message">
              <p className="error-message" id="errorMessageEmail"> {errors.email?.message}</p>
            </div>

            <div className="field form--password">
              <input type={passwordType} id="password" className="password" placeholder="Password"{...register("password")} />
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

            <div className="form-link form--forgot-password">
              <span>Can't remember the password? <a href="#" className="fogot-password" id="fogot-password" onClick={() => {
                navigate("/forgot-password")
              }}>Forgot Passowrd</a></span>
            </div>

            <div className="field form--button" id="CreateAccount">
              <button type="submit">Log in</button>
            </div>

            <div className="form-link form--signup">
              <span>Don't have an account? <a href="#" className="sign-up" id="form-link from--signup" onClick={()=>{navigate("/signup")}}>Sign up</a></span>
            </div>

            <div className="line"></div>

            <div className="form--media-options">
              <a href="#" id="signInFacebook" className="field facebook" >
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
