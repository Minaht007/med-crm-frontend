import React from "react";
import { useState } from "react";

const INITION_STATE = {
  dayOfWeek: "",
};

const DoctoreSchedulle = () => {
  const { day, setStay } = useState(INITION_STATE);
  return (
    <table>
      <thead>
        <tr>
          <th>Day's of week</th>
        </tr>
      </thead>
      <thead>
        <tr key={day}>time</tr>
        <tr>Monday</tr>
        <tr>Thusday</tr>
        <tr>Wensday</tr>
        <tr>Thursday</tr>
        <tr>Friday</tr>
        <tr>Saturday</tr>
        <tr>Sunday</tr>
      </thead>
    </table>
  );
};

export default DoctoreSchedulle;
