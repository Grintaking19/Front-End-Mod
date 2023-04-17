import axios from "axios";
import styles from "./ResetPassword.module.css"
import 'boxicons'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { style } from "@mui/system";



const config = {
  headers: {
    "ngrok-skip-browser-warning": 1
  }
};

export default function ResetPassword() {
  let navigate = useNavigate();
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
    password: yup.string().min(8).max(40).required("Passowrd is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log(data);
    try {
      const response = await axios.post("https://hebtus.me/api/v1/resetpassword", data, config)
      console.log(response);
      navigate("/login");
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <section className={styles["container"]}>
      <div className={`${styles["form"]} ${styles["signup"]}`}>

        <h3 className={styles["hebtus-logo"]}>Hebtus</h3>
        <header>Reset Password</header>

        <form action="#" onSubmit={handleSubmit(onSubmit)}>

          <div className={`${styles["field"]} ${styles["form--password"]}`}>
            <input type={passwordType} id="password" className={styles["password"]} placeholder="Password" {...register("password")}
            />
            <div className={styles["eye-holder"]} id="eyeHolderPassword" onClick={togglePassword}>
              {passwordType === "password" ?
                <i className={`bx bxs-hide ${styles['eye-icon']}`}></i>
                :
                <i className={`bx bxs-show ${styles['eye-icon']}`}></i>
              }
            </div>
          </div>
          <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
            <p className={styles["error-message"]} id="errorMessagePassword">{errors.password?.message}</p>
          </div>


          <div className={`${styles["field"]} ${styles["form--password"]}`}>
            <input type={confirmPasswordType} id="confirmPassword" className={styles.password} placeholder="Confirm Password" {...register("confirmPassword")}
            />
            <div className={styles["eye-holder"]} id="eyeHolderConfirmPassword" onClick={toggleConfirmPassword}>
              {confirmPasswordType === "password" ?
                <i className={`bx bxs-hide ${styles['eye-icon']}`}></i>
                :
                <i className={`bx bxs-show ${styles['eye-icon']}`}></i>
              }
            </div>
          </div>
          <div className={styles['form--error-message']} id="form--error-message">
            <p className={styles['error-message']} id="errorMessageConfirmPassword">{errors.confirmPassword?.message}</p>
          </div>


          <div className={styles["field"]} id="update-password">
            <button className={styles["form--button"]} type="submit">Update Password</button>
          </div>


        </form>

      </div>


    </section>

  )


}
