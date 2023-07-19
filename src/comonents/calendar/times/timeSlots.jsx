import React from "react";
import { addMinutes, format } from "date-fns";

const TimeSlots = () => {
  const startTime = new Date();
  startTime.setHours(1, 0, 0); // Начало временных слотов в 9:00 AM

  const endTime = new Date();
  endTime.setHours(23, 0, 0); // Конец временных слотов в 3:00 PM

  const step = 20; // Шаг временных слотов в 20 минут

  const timeSlots = [];

  let currentTime = startTime;
  while (currentTime <= endTime) {
    const formattedTime = format(currentTime, "h:mm aa");
    timeSlots.push(formattedTime);
    currentTime = addMinutes(currentTime, step);
  }

  return (
    <React.Fragment>
      {timeSlots.map((timeSlot, index) => (
        <tr key={index}>
          <td>{timeSlot}</td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default TimeSlots;
