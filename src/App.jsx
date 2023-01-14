import React from "react";
import "./App.css";
import "./components/event.css";
import EventBar from "./components/EventBar";
import TaskBox from "./components/TaskBox";

function App() {
  const [events, setEvents] = React.useState([
    { title: "工作" },
    { title: "学习" },
    { title: "健身" },
  ]);
  const [currentEvent, setCurrentEvent] = React.useState(null);
  return (
    <div className="App">
      <EventBar events={events} setEvents={setEvents} />
      <TaskBox />
    </div>
  );
}

export default App;
