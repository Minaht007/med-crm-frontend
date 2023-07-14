import React, { useState } from "react";
import axios from "axios";
import style from "./clientPage.module.scss";

const BackendURL = "https://med-crm-backend.onrender.com";

const PationForm = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notification, setNotification] = useState("");

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
      case "location":
        setLocation(value);
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
      location: location,
    };
    axios
      .post(`${BackendURL}/api/client`, data)
      .then((response) => {
        console.log("Data sent successfully!", response);
        setNotification("Data sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setNotification("Error sending data");
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
      {notification && <div className={style.notification}>{notification}</div>}
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
      <input
        className={style.inputLine}
        type="location"
        placeholder="location"
        name="location"
        value={location}
        onChange={handleChange}
      />
      <div className={style.btContainer}>
        <button className={style.inputBtn} onClick={sendData}>
          Send
        </button>
        <button className={style.inputBtn} onClick={cleanForm}>
          Clean
        </button>
      </div>
    </div>
  );
};

export default PationForm;
