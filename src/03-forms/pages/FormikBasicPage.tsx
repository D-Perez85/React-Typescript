import React from "react";
import { useFormik } from "formik";

import "../styles/styles.css";

const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate>
        {" "}
        onSubmit={handleSubmit}
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <label htmlFor="email">Email Address</label>
        <input type="email" onChange={handleChange} value={values.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
