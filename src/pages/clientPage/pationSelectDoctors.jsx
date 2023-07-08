import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import PationForm from "../clientPage/clientPage.jsx";

const backendURL = "http://localhost:3090";
console.log(backendURL);

const INITIAL_STATE = {
  dateOfBirthday: "",
  phone: "",
  email: "",
  selectedDoctor: null,
  selectedDoctors: [],
};

const PationSelectDoctors = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleSelectChange = (selectedOption) => {
    setState((prevState) => ({
      ...prevState,
      selectedDoctor: selectedOption,
      selectedDoctors: [...prevState.selectedDoctors, selectedOption],
    }));
    setShowForm(true);
  };

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

  const { doctor, selectedDoctor, selectedDoctors } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Select
        options={doctor.map((doc) => ({
          label: `${doc.name} ${doc.secondName} - ${doc.speciality}`,
          value: doc.id,
          doctor: doc,
        }))}
        value={selectedDoctor}
        onChange={handleSelectChange}
      />

      {selectedDoctors.length > 0 && (
        <div>
          Selected Doctors:
          {selectedDoctors.map((doc) => (
            <div key={doc.value}>{doc.label}</div>
          ))}
        </div>
      )}

      {showForm && <PationForm />}
    </div>
  );
};

export default PationSelectDoctors;
