import React from "react";

const renderTimeSlots = () => {
  const timeSlots = [];
  const startTime = 9; // Начало рабочего дня (в часах)
  const endTime = 17; // Конец рабочего дня (в часах)
  const interval = 10; // Интервал (в минутах)

  // Создаем слоты времени с шагом в 10 минут
  for (let hour = startTime; hour <= endTime; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      timeSlots.push(
        <tr key={time}>
          <td>{time}</td>
          {/* Ваш код для ячеек задач на каждый день */}
        </tr>
      );
    }
  }

  return timeSlots;
};

export default renderTimeSlots;
