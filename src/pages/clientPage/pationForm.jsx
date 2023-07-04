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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${backendURL}/api/doctor`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setState((prevState) => ({ ...prevState, doctor: data }));
          setLoading(false);
        } else {
          throw new Error("Unexpected response status: " + response.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching doctor data", error);
      });
  }, []);

  const { doctor, name } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Select options={doctor} />

      <input type="text" placeholder="Full name" name="name" value={name} />
    </div>
  );
};

export default PationForm;
