import React, { useState, useEffect } from "react";
import Select from "react-select";

const INITIAL_STATE = {
  name: "",
  dateOfBirthday: "",
  phone: "",
  email: "",
  doctor: ["name", "secondName"],
};

const PationForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    fetch("https://med-crm-backend.onrender.com/doctor")
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({ ...prevState, doctor: data }));
      })
      .catch((error) => {
        console.error("Error data doctor base", error);
      });
  }, []);

  const { doctor, name } = state;

  console.log(doctor);

  return (
    <div>
      <Select options={doctor} onChange={handleChange} />

      <input type="text" placeholder="full name" name="name" value={name} />
    </div>
  );
};

export default PationForm;
