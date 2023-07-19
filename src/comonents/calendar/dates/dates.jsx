import React from "react";
import { addDays, format } from "date-fns";

const Dates = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDate = new Date();

  return (
    <React.Fragment>
      {daysOfWeek.map((day, index) => {
        const date = addDays(currentDate, index + 1);
        const formattedDate = format(date, "dd.MM.yyyy");
        return <th key={day}>{formattedDate}</th>;
      })}
    </React.Fragment>
  );
};

export default Dates;
