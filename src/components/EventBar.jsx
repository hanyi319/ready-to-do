import AddButton from "./AddButton";

const EventBar = ({ events, setEvents }) => {
  return (
    <div className="event-bar">
      <div className="event-bar-title">
        <img src="src/assets/icons/logo.svg" alt="logo" className="logo" />
        <span>点滴清单</span>
      </div>
      <div className="event-container">
        <AddButton />
        {events.map((item) => (
          <div key={item.title} className="event over-hide">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBar;
