import { Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "react-uuid";
import AddTaskButton from "./AddTaskButton";
import Task from "./Task";

const Column = ({ tag, currentEvent, events, setEvents }) => {
  const title = {
    "To Do": "⏳待安排",
    "In Progress": "🔥进行中",
    Completed: "🎯已完成",
  };

  const handleAdd = () => {
    const name = prompt("请输入任务名：");
    const details = prompt("请输入详细信息：");
    if (!(name && details)) return;
    setEvents((prev) => {
      const arrCopy = [...prev];
      const index = prev.findIndex((event) => event.title === currentEvent.title);
      const eventCopy = arrCopy[index];
      arrCopy.splice(index, 1, {
        ...eventCopy,
        [tag]: [...eventCopy[tag], { name: name, id: uuid(), details: details }],
      });
      return arrCopy;
    });
  };
  const handleRemove = (id) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.title === currentEvent.title) {
          const taskList = event[tag];
          const index = taskList.findIndex((item) => item.id === id);
          taskList.splice(index, 1);
          return { ...event, [tag]: [...taskList] };
        } else {
          return event;
        }
      })
    );
  };

  return (
    <div className="column">
      <div className="column-title">{title[tag]}</div>
      <AddTaskButton handleClick={handleAdd} />
      <Droppable droppableId={tag}>
        {(provided, snapshot) => {
          return (
            <div className="task-container" ref={provided.innerRef} {...provided.droppableProps}>
              {events
                .find((event) => event.title === currentEvent.title)
                ?.[tag].map((item, index) => {
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => {
                        return (
                          <Task
                            name={item.name}
                            details={item.details}
                            id={item.id}
                            provided={provided}
                            snapshot={snapshot}
                            handleRemove={handleRemove}
                          />
                        );
                      }}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
