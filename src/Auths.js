import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import "./auths.css";

const Auths = () => {
  return (
    <div className="container-auths">
      <div className="brand-box">
        
      </div>
      <div className="magic-form">
      <Formik
  initialValues={{
    name: "",
    email: "",
    phone: "",
    password: "",
    birthday: "",
    agree: false,
  }}
  validationSchema={Yup.object({
    name: Yup.string().required("isim boş bırakılamaz"),
    email: Yup.string().required("email boş bırakılamaz!"),
    phone: Yup.number().required("lütfen telefon numaranızı giriniz."),
    password: Yup.string().required("şifre boş bırakılamaz!"),
    birthday: Yup.number().required("Lütfen doğum tarihinizi giriniz."),
    agree: Yup.bool().oneOf([true], "koşulları Kabul Etmelisiniz"),
  })}
  onSubmit={(values, {setSubmitting, resetForm}) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 2000);
  }}
>
  {({
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleSubmit,
    handleReset,
    handleChange,
  }) => (
    <form className="magic-form" onSubmit={handleSubmit}>
      <h1>Kayıt Ol</h1>
        <p>Scan App'e kayıt ol fırsatlardan yararlan!</p>
      <label htmlFor="name">İsim</label>
      <input
        id="name"
        placeholder="Adınız ve Soyadınız"
        className="input"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
      )}
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        placeholder="E-mail adresinizi yazınız"
        className="input"
        value={values.email}
        onChange={handleChange}
        type="email"
      />

      <label htmlFor="phone">Telefon Numarası</label>
      <input
        id="phone"
       
        className="input"
        value={values.phone}
        onChange={handleChange}
        type='tel'
        placeholder="örn. (555)-555-5555"
        name="phone"
        
      />
      <label htmlFor="birthday">Doğum Tarihi</label>
      <input
        id="birthday"
        placeholder="Doğum tarihiniz"
        className="input"
        value={values.birthday}
        onChange={handleChange}
        type="date"
      />
      <label htmlFor="password">Şifre</label>
      <input
        id="password"
        placeholder="Şifrenizi giriniz"
        className="input"
        value={values.password}
        onChange={handleChange}
        type='password'
      />

      <div className="checkbox topMargin ">
        <input
          id="agree"
          type="checkbox"
          value={values.agree}
          onChange={handleChange}
        />
        <label htmlFor="agree" className="checkbox-label">
          sözleşmeyi kabul ediyorum.
        </label>
      </div>
      {errors.agree && (
        <div className="input-feedback">{errors.agree}</div>
      )}

      <button type="submit" disabled={!dirty || isSubmitting}>
        Kaydol
      </button>
      <p className="already-login">Zaten kayıtlı mısın? <Link to="/login"> Buradan</Link> giriş yapabilirsin.</p>
    </form>
  )}
</Formik>

      </div>
    </div>
  );
};

export default Auths;
