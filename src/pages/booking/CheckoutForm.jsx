import { TextField, Button, Box, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import styles from "./CheckoutForm.module.css";

const initalValues = {
  firstName: "",
  lastName: "",
  password: "",
};

export default function CheckoutForm() {
  return (
    <div className={styles["form-container"]}>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          name: string().required("Please enter name").min(2, "Name too short"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
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
                label="First Name"
    
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />

              <Field
                name="lastName"
                type="name"
                as={TextField}
                variant="filled"
                color="primary"
                label="Last Name"
                error={Boolean(errors.name) && Boolean(touched.name)}
                helperText={Boolean(touched.name) && errors.name}
              />
            
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="filled"
              color="primary"
              label="Password"
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"

            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )

};