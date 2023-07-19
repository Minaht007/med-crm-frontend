import React from "react";
import { addMinutes, format } from "date-fns";
import styles from "./timeSlots.module.scss"; // Import the styles file

const TimeSlots = () => {
  const startTime = new Date();
  startTime.setHours(0, 0, 0); // Start time for time slots at 00:00

  const endTime = new Date();
  endTime.setHours(23, 40, 0); // End time for time slots at 23:40

  const step = 20; // Time slot interval in minutes

  let currentTime = startTime;
  const timeSlots = [];

  while (currentTime <= endTime) {
    const formattedTime = format(currentTime, "HH:mm");
    const isHour = formattedTime.endsWith(":00");

    timeSlots.push(
      <tr key={formattedTime}>
        <td className={isHour ? styles.hour : styles.minute}>
          {formattedTime}
        </td>
      </tr>
    );

    currentTime = addMinutes(currentTime, step);
  }

  return <tbody>{timeSlots}</tbody>;
};

export default TimeSlots;
