
import axios from "axios";
import "./reset-password.css"
import 'boxicons'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useState } from "react";



const config = {
  headers: {
    "ngrok-skip-browser-warning": 1
  }
};

export default function ResetPassword() {

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
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <section className="container">
      <div className="form signup">

        <h3 className="hebtus-logo">Hebtus</h3>
        <header>Reset Password</header>

        <form action="#" onSubmit={handleSubmit(onSubmit)}>

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


          <div className="field form--button" id="update-password">
            <button type="submit">Update Password</button>
          </div>


        </form>

      </div>


    </section>

  )


}
