import "./forgot-password.css"
import 'boxicons'
import axios from "axios"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"



/////////////////////////////////////////////////////////
export default function ForgotPassword({ setSuccess, setEmail }) {


  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      const response = await axios.post("https://hebtus.me/api/v1/forgotpassword", data);
      setSuccess(true);
      console.log(response);
      setEmail(data.email);

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
          <header>Forgot Password?</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="field form--email">
              <input id="email" type="email" placeholder="Email"{...register("email")} className="email" />
            </div>
            <div className="form--error-message" id="form--error-message">
              <p className="error-message" id="errorMessageEmail"> {errors.email?.message}</p>
            </div>

            <div className="field form--button" id="CreateAccount">
              <button type="submit">Continue</button>
            </div>

          </form>

        </div>
      </section>

    </div>
  )


}
