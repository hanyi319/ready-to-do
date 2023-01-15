import React from "react";
import "./App.css";
import "./components/event.css";
import "./components/task.css";
import EventBar from "./components/EventBar";
import TaskBox from "./components/TaskBox";
import uuid from "react-uuid";

function App() {
  const [events, setEvents] = React.useState([
    {
      title: "工作",
      tasks: [
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "to-do",
        },
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "in-progress",
        },
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "completed",
        },
      ],
    },
    {
      title: "学习",
      tasks: [
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "to-do",
        },
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "in-progress",
        },
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "completed",
        },
      ],
    },
    {
      title: "健身",
      tasks: [
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "to-do",
        },
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "in-progress",
        },
        {
          name: "Something",
          id: uuid(),
          details: "SomethingSomethingSomething",
          state: "completed",
        },
      ],
    },
  ]);
  const [currentEvent, setCurrentEvent] = React.useState(events[0]);

  return (
    <div className="App">
      <EventBar
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
      <TaskBox
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
    </div>
  );
}

export default App;
