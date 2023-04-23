import styles from "./SignIn.module.css"
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
  const [message, setMessage] = useState("");
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

  async function onSubmit(rdata) {
    try {
      const response = await axios.post("https://hebtus.me/api/v1/login", rdata, config)
      if (response.data.token) {
        localStorage.setItem('user', response.data.token);
      }
      console.log(localStorage.getItem('user'));
      navigate("/");
    }
    catch (err) {
      setMessage(err.response.data.message);
      console.log(err);
    }
  }

  async function toGoogle()
  {
    window.open("https://hebtus.me/api/v1/oauth/login/google", "_self");
  }

  return (
    <div className={styles["login-page"]}>
      <section className={styles["container"]}>
        <div className={`${styles.form} ${styles["login"]}`}>

          <h3 className={styles["hebtus-logo"]}>Hebtus</h3>
          <header >Log in</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className={`${styles.field} ${styles["form--email"]}`}>
              <input id="email" type="email" placeholder="Email" {...register("email")} className={styles.email} />
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message-email">
              <p className={styles["error-message"]} id="errorMessageEmail">{errors.email?.message}</p>
            </div>


            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input type={passwordType} id="password" className={styles.password} placeholder="Password" {...register("password")}
              />
              <div className={styles["eye-holder"]} id="eyeHolderPassword" onClick={togglePassword}>
                {passwordType === "password" ?
                  <i className={`bx bxs-hide ${styles["eye-icon"]}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </i>
                  :
                  <i className={`bx bxs-show ${styles["eye-icon"]}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </i>
                }
              </div>
            </div>
            <div className={styles["form--error-message"]} id="form--error-message-password">
              <p className={styles["error-message"]} id="errorMessagePassword">{errors.password?.message}</p>
            </div>

            <div className={styles["form--error-message"]} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessage">{message}</p>
            </div>

            <div className={styles["form-link"]} id="form--forgot-password">
              <span className={styles["cant't-remember the password"]}>Can't remember the password? <a href="#" className={styles["forgot-password"]} id="fogot-password" onClick={() => {
                navigate("/forgot-password")
              }}>Forgot Passowrd</a></span>
            </div>

            <div className={`${styles["field"]} ${styles["form--button"]}`} id="LogIn">
              <button type="submit" id="form--button-login" className={styles["form--button-login"]}>Log in</button>
            </div>

            <div className={`${styles["form-link"]} ${styles["form--signup"]}`}>
              <span className={styles["don't-have-an-account"]}>Don't have an account? <a href="#" className={`${styles["form-link"]} ${styles["from--signup"]}`} onClick={() => { navigate("/signup") }} id="sign-up-link">Sign up</a></span>
            </div>

            <div className={styles["line"]}></div>

            <div className={styles["form--media-options"]}>
              <a href="#" id="signInFacebook" className={`${styles["field"]} ${styles["facebook"]}`}>
                <i class='bx bxl-facebook facebook-icon'></i>
                <span className={styles["sign-in-with-facebook"]} id="sign-in-with-facebook">Sign In with Facebook</span>
              </a>
            </div>

            <div className={styles["form--media-options"]}>
              <a href="#" id="signInGoogle" className={`${styles["field"]} ${styles["google"]}`} onClick={() => { toGoogle() }}>
                <img src={googleLogo} alt="" className={styles["google-img"]} />
                <span className="sign-in-with-google" id="sign-in-with-facebook" >Sign In with Google</span>
              </a>
            </div>

          </form>

        </div>

      </section>

      <div className={styles["login-page-image"]}>
        <img src={logInImg} alt="sign-in-image" className={styles["login-image"]} />
      </div>

    </div>
  )


}
