import moment from "moment";
import "moment/locale/ja";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("ja");

const events = [
  {
    title: "会議",
    start: moment().set({ hour: 10, minute: 0 }).toDate(),
    end: moment().set({ hour: 12, minute: 0 }).toDate(),
  },
  {
    title: "ランチ",
    start: moment().set({ hour: 12, minute: 30 }).toDate(),
    end: moment().set({ hour: 13, minute: 30 }).toDate(),
  },
  {
    title: "打ち合わせ",
    start: moment().set({ hour: 14, minute: 0 }).toDate(),
    end: moment().set({ hour: 16, minute: 0 }).toDate(),
  },
];

const CalendarBody = () => {
  const localizer = momentLocalizer(moment);

  return (
    <div style={{ height: "600px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={["day","week","month"]}
        startAccessor="start"
        endAccessor="end"
        messages={{ allDay: "終日" }}
        culture="ja"
      />
    </div>
  );
};

export default CalendarBody;
