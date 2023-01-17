import AddEventButton from "./AddEventButton";

const EventBar = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleAdd = () => {
    const title = prompt("请输入事件名：");

    // 阻止事件重复
    if (events.find((event) => event.title.toLowerCase() === title.toLowerCase())) {
      alert("事件已存在");
      return;
    }
    if (title) {
      setEvents((prev) => [
        ...prev,
        { title: title, ["To Do"]: [], ["In Progress"]: [], ["Completed"]: [] },
      ]);
    }
  };

  return (
    <div className="event-bar">
      <div className="event-bar-title">
        <img src="src/assets/icons/logo.svg" alt="logo" className="logo" />
        <span>点滴清单</span>
      </div>
      <div className="event-container">
        <AddEventButton handleClick={handleAdd} />
        {events.map((item) => (
          <div
            key={item.title}
            className={`event over-hide ${
              currentEvent.title === item.title ? "selected-event" : ""
            }`}
            onClick={() => setCurrentEvent(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBar;
