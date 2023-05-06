import styles from "./UpdatePassword.module.css"
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
export default function UpdatePassword() {


  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  let navigate = useNavigate();

  const [oldPasswordType, setOldPasswordType] = useState("password");
  const toggleOldPassword = () => {
    if (oldPasswordType === "password") {
      setOldPasswordType("text")
      return;
    }
    setOldPasswordType("password")
  }


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
    passwordCurrent: yup.string().min(8).max(40).required("Current password is needed"),
    password: yup.string().min(8).max(40).required("Passowrd is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(rdata) {
    delete rdata.email;
    console.log(rdata);
    try {
      console.log("lol");
      const response = await axios.patch(`${process.env.REACT_APP_API_DOMAIN}/updatepassword`, rdata, config)
      setMessage(response.data.message);
      console.log(localStorage.getItem('user'));
      setSuccess("success-message");
      // navigate("/");
    }
    catch (err) {
      setMessage(err.response.data.message);
      setSuccess("error-message");
      console.log(err);
    }
  }




  return (
    <div className={styles["login-page"]}>
      <section className={styles["container"]}>
        <div className={`${styles.form} ${styles["login"]}`}>

          <h3 className={styles["hebtus-logo"]} onClick={() => { navigate("/") }}>Hebtus</h3>
          <header >Ohh, looks like you want to change your password 🧐</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input id="currentPassword" type={oldPasswordType} placeholder="Current Password" {...register("passwordCurrent")} className={styles.password} />
              <div className={styles["eye-holder"]} id="eyeHolderPassword" onClick={toggleOldPassword}>
                {oldPasswordType === "password" ?
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
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message-email">
              <p className={styles["error-message"]} id="errorMessageCurrentPassword">{errors.passwordCurrent?.message}</p>
            </div>


            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input type={passwordType} id="password" className={styles.password} placeholder="New Password" {...register("password")}
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


            <div className={`${styles.field} ${styles["form--password"]}`}>
              <input type={confirmPasswordType} id="confirmPassword" className={styles.password} placeholder="Confirm Password" {...register("confirmPassword")}
              />
              <div className={styles["eye-holder"]} id="eyeHolderConfirmPassword" onClick={toggleConfirmPassword}>
                {confirmPasswordType === "password" ?
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
            <div className={styles['form--error-message']} id="form--error-message">
              <p className={styles['error-message']} id="errorMessageConfirmPassword">{errors.confirmPassword?.message}</p>
            </div>


            <div className={styles["form--error-message"]} id="form--error-message">
              <p className={styles[success]} id="errorMessage">{message}</p>
            </div>



            <div className={`${styles["field"]} ${styles["form--button"]}`} id="updatePassowrdButton">
              <button type="submit" id="form--button-login" className={styles["form--button"]}>Update Your Password</button>
            </div>



          </form>

        </div>

      </section>


    </div>
  )


}
