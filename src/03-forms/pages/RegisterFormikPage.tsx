import { Formik, Field, Form, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Formik Challenge</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, "Debe contener al menos 3 caracteres")
            .max(10, "El maximo es de 10 caracteres")
            .required("Este campo es requerido"),
          lastName: Yup.string()
            .min(3, "Debe contener al menos 3 caracteres")
            .max(10, "El maximo es de 10 caracteres")
            .required("Este campo es requerido"),
          password: Yup.string()
            .required("Este campo es requerido")
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
              "Debe contener 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial"
            ),
          password2: Yup.string()
            .required("Este campo es requerido")
            .oneOf([Yup.ref("password"), null], "Passwords deben coincidir"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" placeholder="Jhon"/>
            <MyTextInput label="Last Name" name="lastName" placeholder="Doe" />
            <MyTextInput label="Password" name="password" type="password" placeholder="°°°°°°°°°"/>
            <MyTextInput label="Confirm Password" name="password2" type="password" placeholder="°°°°°°°°°"/>
              <button type="submit">Submit</button>
              <button onClick={handleReset}> Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
