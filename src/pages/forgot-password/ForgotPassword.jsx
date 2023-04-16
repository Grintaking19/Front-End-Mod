import styles from "./ForgotPassword.module.css"
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

    <div className={styles["signup-page"]}>
      <section className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>

          <h3 className={styles["hebtus-logo"]}>Hebtus</h3>
          <header>Forgot Password?</header>

          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.field} ${styles["form--email"]}`}>
              <input id="email" type="email" placeholder="Email" {...register("email")} className={styles.email} />
            </div>
            <div className={`${styles["form--error-message"]} ${styles["form--error-message"]}`} id="form--error-message">
              <p className={styles["error-message"]} id="errorMessageEmail">{errors.email?.message}</p>
            </div>

            <div className={`${styles.field} ${styles['form--button']}`} id="Continue">
              <button type="submit">Continue</button>
            </div>

          </form>

        </div>
      </section>

    </div>
  )


}
