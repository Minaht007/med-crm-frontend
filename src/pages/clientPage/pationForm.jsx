import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const backendURL = "https://med-crm-backend.onrender.com";

const INITIAL_STATE = {
  name: "",
  dateOfBirthday: "",
  phone: "",
  email: "",
  doctor: [],
};

const PationForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`${backendURL}/api/doctor`)
      .then((response) => {
        const data = response.data;
        setState((prevState) => ({ ...prevState, doctor: data }));
      })
      .catch((error) => {
        console.error("Error fetching doctor data", error);
      });
  }, []);

  const { doctor, name } = state;

  console.log(doctor);

  return (
    <div>
      <Select options={doctor} onChange={handleChange} />

      <input
        type="text"
        placeholder="full name"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default PationForm;
