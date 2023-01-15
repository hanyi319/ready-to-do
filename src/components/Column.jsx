import AddTaskButton from "./AddTaskButton";
import Task from "./Task";

const Column = ({ tag, currentEvent, events, setEvents }) => {
  const handleAdd = () => {
    const name = prompt("请输入任务名：");
    const details = prompt("请输入详细信息：");
    if (!(name && details)) return;
    setEvents((prev) => {
      const arrCopy = [...prev];
      const index = prev.findIndex((event) => event.title === currentEvent.title);
      const eventCopy = arrCopy[index];
      arrCopy.splice(index, 1, {
        title: currentEvent.title,
        tasks: [...eventCopy.tasks, { name: name, details: details, state: tag }],
      });
      return arrCopy;
    });
  };

  return (
    <div className="column">
      {tag}
      <AddTaskButton handleClick={handleAdd} />
      <div className="task-container">
        {events
          .find((event) => event.title === currentEvent.title)
          ?.tasks.map((item) => {
            if (item.state === tag) {
              return <Task key={item.name} name={item.name} details={item.details} />;
            }
          })}
      </div>
    </div>
  );
};

export default Column;
