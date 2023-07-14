import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import PationForm from "../clientPage/clientPage.jsx";
import { Outlet } from "react-router-dom";
import style from "./clientPage.module.scss";

const backendURL = "http://localhost:3090";
console.log(backendURL);

const INITIAL_STATE = {
  dateOfBirthday: "",
  phone: "",
  email: "",
  selectedDoctors: [],
};

const PationSelectDoctors = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [showPationForm, setShowPationForm] = useState(false);
  const handleSelectChange = (selectedOptions) => {
    setState((prevState) => ({
      ...prevState,
      selectedDoctors: selectedOptions,
    }));
    setShowPationForm(selectedOptions.length > 0);
  };

  useEffect(() => {
    axios
      .get(`${backendURL}/api/doctor`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setOptions(
            data.map((doc) => ({
              label: `${doc.name} ${doc.secondName} - ${doc.speciality}`,
              value: doc.id,
              doctor: doc,
            }))
          );
          setLoading(false);
        } else {
          throw new Error("Unexpected response status: " + response.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching doctor data", error);
      });
  }, []);

  const { selectedDoctors } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.selectContainer}>
      <Select
        className={style.selectData}
        options={options.filter(
          (option) =>
            !selectedDoctors.find((doctor) => doctor.value === option.value)
        )}
        value={selectedDoctors}
        onChange={handleSelectChange}
        isMulti
      />
      <Outlet />
      {showPationForm && <PationForm />}{" "}
    </div>
  );
};

export default PationSelectDoctors;
