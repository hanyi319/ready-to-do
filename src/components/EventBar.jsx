import AddButton from "./AddButton";

const EventBar = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleAdd = () => {
    const title = prompt("请输入事件名：");
    if (title) {
      setEvents((prev) => [...prev, { title: title, tasks: {} }]);
    }
  };

  return (
    <div className="event-bar">
      <div className="event-bar-title">
        <img src="src/assets/icons/logo.svg" alt="logo" className="logo" />
        <span>点滴清单</span>
      </div>
      <div className="event-container">
        <AddButton handleClick={handleAdd} />
        {events.map((item) => (
          <div
            key={item.title}
            className={`event over-hide ${
              currentEvent.title === item.title ? "selected-event" : null
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
