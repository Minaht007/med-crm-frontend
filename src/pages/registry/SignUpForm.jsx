import React, { useState, useEffect } from "react";
import styles from "./_SignUpForm.module.scss";

const INITIAL_STATE = {
  login: "",
  pass: "",
  phone: "",
  email: "",
};

const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { login, email, pass, phone } = formData;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${pass}, Phone: ${phone}`
    );
    onSubmit({ ...formData });
    reset();
  };

  const reset = () => {
    setFormData(INITIAL_STATE);
  };

  const { login, email, pass, phone } = formData;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelName}>Name</label>
      <input
        className={styles.dataInput}
        type="text"
        id="name"
        placeholder="Enter login"
        name="login"
        value={login}
        onChange={handleChange}
      />

      <label className={styles.labelName}>Email</label>
      <input
        className={styles.dataInput}
        type="email"
        id="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <label className={styles.labelName}>Phone</label>
      <input
        className={styles.dataInput}
        type="tel"
        id="phone"
        placeholder="Enter phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />

      <label className={styles.labelName}>Password</label>
      <input
        className={styles.dataInput}
        type="password"
        id="pass"
        placeholder="Enter password"
        name="pass"
        value={pass}
        onChange={handleChange}
      />

      <button className={styles.submitBtn} type="submit">
        SignUp as {login}
      </button>
    </form>
  );
};

export default SignUpForm;
