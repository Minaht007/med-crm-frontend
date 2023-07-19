import React from "react";
import WeekDays from "../../comonents/calendar/days/days";
import TimeSlots from "../../comonents/calendar/times/timeSlots";
import style from "./doctorSchedule.module.scss";

const ScheduleTable = () => {
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.th}></th>
            <WeekDays />
          </tr>
        </thead>
        <tbody>
          <TimeSlots />
          {/* Время в столбце слева */}
          {/* Здесь можно добавить строки с данными для каждого временного слота */}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
