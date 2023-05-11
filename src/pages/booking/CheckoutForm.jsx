import { TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { FormLabel, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import styles from "./CheckoutForm.module.css";
import * as yup from "yup"
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const initalValues = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  phone: "",
  gender: "",
};

const config = {
  headers: {
    token: localStorage.getItem('user'),
  }
}

const useStyles = makeStyles((theme) => ({
  input: {
    background: "rgb(255, 255, 255)",
    outline
      : "auto 0.2px rgb(223, 224, 235)"
  }
}));



      

export function CheckoutForm({ formikRef, selectedTickets, eventId, setShowDonePage }) {

  const classes = useStyles();
////////////////////////////////////////////////////////////
  const onSubmit = async (values, formikHelpers) => {
    localStorage.setItem("user", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQ0NWU4YWJiZTliNmY4MTcyZjQyMyIsImlhdCI6MTY4Mzc0NTUzNSwiZXhwIjoxNjkxNTIxNTM1fQ.uUJVeO-s8JLG04BfH__JWjQa-T0biT9N3Ut_WF5yUrk")
    console.log(values);
    console.log(values);


    const newBooking = selectedTickets.map((ticket) => {
      return {
        ticketID: ticket.ticketId,
        quantity: ticket.sales,
        price: ticket.price,
      };
    })
    const bookingPost = {
      "eventID": eventId,
      "guestEmail": values.email,
      "phoneNumber": values.phone,
      "gender": values.gender,
      "name": {
        "firstName": values.firstName,
        "lastName": values.lastName,
      },
      bookings: newBooking,
    }
    console.log(bookingPost);
    try {
      const response = await axios.post(process.env.REACT_APP_API_DOMAIN + "/bookings", bookingPost, config);
      console.log(response);
      setShowDonePage(true);
    }
    catch (error) {
      console.log(error);
    }
    formikHelpers.resetForm();
  }
///////////////////////////////////////////////////////////////////
  return (
    <div className={styles["form-container"]}>
      <Formik
        innerRef={formikRef}
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Email is required").email("Invalid email"),
          firstName: string().required("First Name is required").min(2, "Name too short"),
          lastName: string().required("Last Name is required").min(2, "Name too short"),
          confirmEmail: string().oneOf([yup.ref("email"), null], "Emails don't match").required("Confirm email is required"),
          phone: string().matches("^01[0-2,5]{1}[0-9]{8}$", "Please enter a valid phone number").required("Mobile number is required"),
          gender: string().oneOf(["Male", "Female"], "Required").required("Required"),
        })}
        onSubmit={onSubmit}
        
        

      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <div className={styles["form--group"]}>
              <Field
                name="firstName"
                type="name"
                as={TextField}
                variant="filled"
                color="primary"
                size="small"
                label="First Name"
                sx={{ bgcolor: 'text.primary' }}
                disableUnderline={true}
                InputProps={{ className: classes.input, disableUnderline: true }}
                error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                helperText={Boolean(touched.firstName) && errors.firstName}
              />

              <Field
                name="lastName"
                type="name"
                as={TextField}
                variant="filled"
                color="primary"
                label="Last Name"
                size="small"
                sx={{ bgcolor: 'text.primary' }}
                InputProps={{ className: classes.input, disableUnderline: true }}
                error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                helperText={Boolean(touched.lastName) && errors.lastName}
              />

              <Field
                name="email"
                type="email"
                as={TextField}
                variant="filled"
                color="primary"
                label="Email"
                size="small"
                sx={{ bgcolor: 'text.primary' }}
                InputProps={{ className: classes.input, disableUnderline: true }}
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <Field
                name="confirmEmail"
                type="email"
                as={TextField}
                variant="filled"
                color="primary"
                size="small"
                label="Confirm Email"
                sx={{ bgcolor: 'text.primary' }}
                InputProps={{ className: classes.input, disableUnderline: true }}
                error={Boolean(errors.confirmEmail) && Boolean(touched.confirmEmail)}
                helperText={Boolean(touched.confirmEmail) && errors.confirmEmail}
              />
            </div>
            <div className={styles["form--phone"]}>
              <Field
                name="phone"
                type="tel"
                as={TextField}
                variant="filled"
                color="primary"
                size="small"
                label="Mobile Number"
                fullWidth
                InputProps={{ className: classes.input, disableUnderline: true }}
                className={classes.root}
                error={Boolean(errors.phone) && Boolean(touched.phone)}
                helperText={Boolean(touched.phone) && errors.phone}
              />
            </div>
            <div className={styles["form--gender"]}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{}}>Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-labelledby="gender"
                  name="gender"
                  row
                  error={Boolean(errors.gender) && Boolean(touched.gender)}
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                </Field>

              </FormControl>
            </div>
            <div className={styles["form--checkbox-container"]}>
              <div className={styles["form-check"]}>
                <input type="checkbox" id="keep-me-informed" name="keep-me-informed" value="Keep me" />
                <label for="keep-me-informed"> Keep me updated on more events and news from this event organizer.</label>
              </div>
              <div className={styles["form-check"]}>
                <input type="checkbox" id="send-email" name="send-email" value="Send Email" />
                <label for="send-email"> Send me emails about the best events happening nearby or online.</label>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );

}
