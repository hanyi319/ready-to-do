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
      ["To Do"]: [
        {
          name: "工作任务 1",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
      ["In Progress"]: [
        {
          name: "工作任务 2",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
      ["Completed"]: [
        {
          name: "工作任务 3",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
    },
    {
      title: "学习",
      ["To Do"]: [
        {
          name: "学习任务 1",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
      ["In Progress"]: [
        {
          name: "学习任务 2",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
      ["Completed"]: [
        {
          name: "学习任务 3",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
    },
    {
      title: "健身",
      ["To Do"]: [
        {
          name: "健身任务 1",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
      ["In Progress"]: [
        {
          name: "健身任务 2",
          id: uuid(),
          details: "这是一段测试用的文本。",
        },
      ],
      ["Completed"]: [
        {
          name: "健身任务 3",
          id: uuid(),
          details: "这是一段测试用的文本。",
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
