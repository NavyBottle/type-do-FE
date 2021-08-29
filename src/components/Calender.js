import { React } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calender = ({ events }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      customButtons={{
        new: {
          text: "new",
          click: () => console.log("new event occured"),
        },
      }}
      headerToolbar={{
        center: "dayGridMonth timeGridWeek timeGridDay",
        end: "new today prev next",
      }}
      events={events}
    />
  );
};

export default Calender;
