import React from "react";
// import { useState } from "react";
import moment from "moment";

const DoctoreSchedulle = () => {
  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startDay = moment().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");

  console.log(startDay.format("DD.MM.YYYY"));
  console.log(endDay.format("DD.MM.YYYY"));

  const calendar = [];
  console.log(calendar);
  const day = startDay;

  while (!day.isSame(endDay)) {
    calendar.push(day);
    day.add(1, "day");
  }

  return <div></div>;
};

export default DoctoreSchedulle;
