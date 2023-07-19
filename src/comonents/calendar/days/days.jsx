import React from "react";
import { addDays, format } from "date-fns";

const WeekDays = () => {
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

  const daysOfWeekData = daysOfWeek.map((day, index) => {
    const date = addDays(currentDate, index);
    const formattedDate = format(date, "dd.MM.yyyy");
    return {
      day,
      formattedDate,
    };
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th> {/* Пустая ячейка в верхнем левом углу */}
            {daysOfWeekData.map((dayData) => (
              <th key={dayData.formattedDate}>
                {dayData.day} ({dayData.formattedDate})
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default WeekDays;
