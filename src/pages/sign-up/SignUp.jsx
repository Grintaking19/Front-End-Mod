import axios from "axios";
import styles from "./SignUp.module.css"
import 'boxicons'
import googleLogo from "./assets/google-logo.png"
import signUpImg from "./assets/Log-in-img-part2.jpg"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const config = {
  headers: {
    "ngrok-skip-browser-warning": 1
  }
};

export default function SignUp({ setSuccess, setEmail }) {
  let navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [message, setMessage] = useState("");

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
    name: yup.object({
    firstName: yup.string().required("First name is requried"),
    lastName: yup.string().required("Last name is requried"),
     }),
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
      setMessage(err.response.data.message);
      console.log(err);
    }
  }


  return (
    <div className={styles["signup-page"]}>
      <section className={styles.container}>
        <div className={`${styles.form} ${styles.signup}`}>

          <h3 className={styles["hebtus-logo"]} onClick={() => { navigate("/") }}>Hebtus</h3>
          <header>Create an account</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.field} ${styles["form--email"]}`}>
              <input id="email" type="email" placeholder="Email" {...register("email")} className={styles.email} />
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessageEmail">{errors.email?.message}</p>
            </div>

            <div className={`${styles.field} ${styles["form--email"]}`}>
              <input type="email" placeholder="Confirm Email" {...register("confirmEmail")} className={styles.email} />
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessageConfirmEmail">{errors.confirmEmail?.message}</p>
            </div>

            <div className={styles["form--name-container"]}>
              <div className={`${styles.name} ${styles["first-name"]}`}>
                <input id="firstName" type="text" placeholder="First Name" {...register("name.firstName")} className={styles["first-name"]} />
              </div>

              <div className={`${styles.name} ${styles["last-name"]}`}>
                <input id="lastName" type="text" placeholder="Last Name" {...register("name.lastName")} className={styles["last-name"]} />
              </div>

            </div>

            <div className={styles["form--name-container-errors"]}>
              <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
                <p className={styles["error-message"]} id="errorMessageFirstName">{errors.firstName?.message}</p>
              </div>

              <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
                <p className={styles["error-message"]} id="errorMessageLastName">{errors.lastName?.message}</p>
              </div>

            </div>



            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input type={passwordType} id="password" className={styles.password} placeholder="Password" {...register("password")}
              />
              <div className={styles["eye-holder"]} id="eyeHolderPassword" onClick={togglePassword}>
                {passwordType === "password" ?
                    <i className={`bx bxs-hide ${styles["eye-icon"]}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                    </i>
                    :
                    <i className={`bx bxs-show ${styles["eye-icon"]}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                    </i>
                  }
              </div>
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessagePassword">{errors.password?.message}</p>
            </div>


            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input type={confirmPasswordType} id="confirmPassword" className={styles.password} placeholder="Confirm Password" {...register("confirmPassword")}
              />
              <div className={styles["eye-holder"]} id="eyeHolderConfirmPassword" onClick={toggleConfirmPassword}>
              {confirmPasswordType === "password" ?
                  <i className={`bx bxs-hide ${styles["eye-icon"]}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </i>
                  :
                  <i className={`bx bxs-show ${styles["eye-icon"]}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </i>
                }
              </div>
            </div>
            <div className={styles['form--error-message']} id="form--error-message">
              <p className={styles['error-message']} id="errorMessageConfirmPassword">{errors.confirmPassword?.message}</p>
            </div>
            <div className={styles["form--error-message"]} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessage">{message}</p>
            </div>


            <div className={`${styles.field}`} id="CreateAccount">
              <button type="submit">Create account</button>
            </div>

            <div className={styles['form-link form--signup']}>
              <span>Already have an account? <a href="#" id="SignIn" className={styles['sign-up']} onClick={() => {navigate("/login")}}>Sign in</a></span>
            </div>

            <div className={styles.line}></div>

            <div className={styles['form--media-options']}>
              <a href="#" id="signUpFacebook" className={`${styles.field} ${styles.facebook}`}>
                <i className='bx bxl-facebook facebook-icon'></i>
                <span className = {styles["sign-up-with-facebook"]}>Sign up with Facebook</span>
              </a>
            </div>

            <div className={styles['form--media-options']}>
              <a href="#" id="signUpGoogle" className={`${styles.field} ${styles.google}`}>
                <img src={googleLogo} alt="" className={styles['google-img']} />
                <span>Sign up with Google</span>
              </a>
            </div>
          </form>

        </div>


      </section>

      <div className={styles["signup-page-image"]}>
        <img src={signUpImg} id="signupPageImage" alt="event-image" className={styles["signup-image"]} />
      </div>

    </div>
  )


}
