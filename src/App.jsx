import React, { useMemo, useState, useCallback, useEffect } from "react";
import "./App.css";
import "./components/event.css";
import "./components/task.css";
import EventBar from "./components/EventBar";
import TaskBox from "./components/TaskBox";

function App() {
  const initEvent = useMemo(
    () => [
      {
        title: "添加一项新事件",
        ["To Do"]: [],
        ["In Progress"]: [],
        ["Completed"]: [],
      },
    ],
    []
  );
  const [events, setEvents] = useState(() => {
    return localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : initEvent;
  });
  const [currentEvent, setCurrentEvent] = useState(events[0]);
  const updateEvents = useCallback(async () => {
    try {
      if (!events.length) {
        await localStorage.setItem("events", JSON.stringify(initEvent));
        setEvents(JSON.parse(localStorage.getItem("events")));
      } else {
        await localStorage.setItem("events", JSON.stringify(events));
      }
    } catch (e) {
      console.error("修改事件失败");
    }
  }, [events]);

  // 将数据存入 localStorage
  useEffect(() => {
    updateEvents();
  }, [events]);

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
