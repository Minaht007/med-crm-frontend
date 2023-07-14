import React, { useState } from "react";
import axios from "axios";
import style from "./clientPage.module.scss";

const BackendURL = "http://localhost:3090";

const PationForm = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "dateOfBirth":
        setDateOfBirth(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const sendData = () => {
    const data = {
      name: name,
      dateOfBirth: dateOfBirth,
      email: email,
      phone: phone,
    };
    axios
      .post(`${BackendURL}/api/client`, data)
      .then((response) => {
        console.log("Data sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const cleanForm = () => {
    setName("");
    setDateOfBirth("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className={style.inputBlock}>
      <input
        className={style.inputLine}
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <input
        className={style.inputLine}
        type="date"
        placeholder="Date of Birth"
        name="dateOfBirth"
        value={dateOfBirth}
        onChange={handleChange}
      />

      <input
        className={style.inputLine}
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <input
        className={style.inputLine}
        type="tel"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />

      <button className={style.inputBtn} onClick={sendData}>
        Send
      </button>
      <button className={style.inputBtn} onClick={cleanForm}>
        Clean
      </button>
    </div>
  );
};

export default PationForm;
