import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./login.css";

function Login() {
  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required(""),
          password: Yup.string().required(""),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleReset,
          handleChange,
          isSubmitting,
          touched,
          dirty,
        }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Scan App'e Giriş Yap</h1>
            <p>Fırsatlardan yararlanmana çok az kaldı!</p>
            <label htmlFor="email">E-mail</label>
            <input
            id="email"
              placeholder="lütfen e-mail adresinizi yazınız."
              className="input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="password">Şifre</label>
            <input
            id="password"
              placeholder="lütfen şifrenizi giriniz."
              className="input"
              value={values.password}
              onChange={handleChange}
              type="password"
            />
            <button type="submit" disabled={!dirty || isSubmitting}>
              Giriş Yap
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
