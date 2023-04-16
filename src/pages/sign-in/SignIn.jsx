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
    <div className={styles["login-page"]}>
      <section className={styles["container"]}>
        <div className={`${styles["form"]} ${styles["login"]}`}>

          <h3 className={styles["hebtus-logo"]}>Hebtus</h3>
          <header >Log in</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className={`${styles.field} ${styles["form--email"]}`}>
              <input id="email" type="email" placeholder="Email" {...register("email")} className={styles.email} />
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessageEmail">{errors.email?.message}</p>
            </div>


            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input type={passwordType} id="password" className={styles.password} placeholder="Password" {...register("password")}
              />
              <div className={styles["eye-holder"]} id="eyeHolderPassword" onClick={togglePassword}>
                {passwordType === "password" ?
                  <i className='bx bxs-hide eye-icon'></i>
                  :
                  <i className='bx bxs-show eye-icon'></i>
                }
              </div>
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessagePassword">{errors.password?.message}</p>
            </div>

            <div className={styles["form-link"] + " " + styles["form--forgot-password"]}>
              <span className={styles["cant't-remember the password"]}>Can't remember the password? <a href="#" className={styles["forgot-password"]} id="fogot-password" onClick={() => {
                navigate("/forgot-password")
              }}>Forgot Passowrd</a></span>
            </div>

            <div className={styles["field"] + " " + styles["form--button"]} id="LogIn">
              <button type="submit" className={styles["form--button-login"]}>Log in</button>
            </div>

            <div className={styles["form-link"] + " " + styles["form--signup"]}>
              <span className={styles["don't-have-an-account"]}>Don't have an account? <a href="#" className={styles["sign-up"]} id={styles["form-link"] + " " + styles["from--signup"]} onClick={() => { navigate("/signup") }}>Sign up</a></span>
            </div>

            <div className={styles["line"]}></div>

            <div className={styles["form--media-options"]}>
              <a href="#" id="signInFacebook" className={styles["field"] + " " + styles["facebook"]}>
                <i class='bx bxl-facebook facebook-icon'></i>
                <span className={styles["sign-in-with-facebook"]}>Sign In with Facebook</span>
              </a>
            </div>

            <div className={styles["form--media-options"]}>
              <a href="#" id="signInGoogle" className={styles["field"] + " " + styles["google"]}>
                <img src={googleLogo} alt="" className={styles["google-img"]} />
                <span className="sign-in-with-google">Sign In with Google</span>
              </a>
            </div>

          </form>

        </div>

      </section>

      <div className={styles["signup-page-image"]}>
        <img src={logInImg} alt="event-image" className={styles["login-image"]} />
      </div>

    </div>
  )


}
