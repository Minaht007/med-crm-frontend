import React from "react";
import {
  format,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
} from "date-fns";

const Calendar = ({ selectedDate, onDateChange }) => {
  const weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const today = new Date();

  // Функция для изменения выбранной даты
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  // Функция для перехода на предыдущий день
  const goToPreviousDay = () => {
    const previousDay = subDays(selectedDate, 1);
    handleDateChange(previousDay);
  };

  // Функция для перехода на следующий день
  const goToNextDay = () => {
    const nextDay = addDays(selectedDate, 1);
    handleDateChange(nextDay);
  };

  // Функция для отображения дней недели
  const renderWeekdays = () => {
    return weekdays.map((day) => <th key={day}>{day}</th>);
  };

  // Функция для отображения дат месяца
  const renderDays = () => {
    const startWeek = startOfWeek(selectedDate);
    const endWeek = endOfWeek(selectedDate);

    const days = [];
    let currentDay = startWeek;

    while (currentDay <= endWeek) {
      days.push(currentDay);
      currentDay = addDays(currentDay, 1);
    }

    return days.map((day) => {
      const isToday = isSameDay(day, today);
      const isSelected = isSameDay(day, selectedDate);
      const isCurrentMonth = isSameMonth(day, selectedDate);

      return (
        <td
          key={day}
          className={`day ${isToday ? "today" : ""} ${
            isSelected ? "selected" : ""
          } ${!isCurrentMonth ? "other-month" : ""}`}
          onClick={() => handleDateChange(day)}
        >
          {format(day, "d")}
        </td>
      );
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={goToPreviousDay}>&lt;</button>
        <input
          type="text"
          value={format(selectedDate, "dd.MM.yyyy")}
          onChange={(e) => handleDateChange(new Date(e.target.value))}
        />
        <button onClick={goToNextDay}>&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>{renderWeekdays()}</tr>
        </thead>
        <tbody>
          <tr>{renderDays()}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
