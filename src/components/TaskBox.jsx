import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const TaskBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = () => {
    if (confirm("是否确认删除该事件？")) {
      setEvents((prev) => {
        const result = prev.filter((item) => item.title != currentEvent.title);
        if (!result.length) {
          setEvents([{ title: "添加一项新事件", tasks: [] }]);
          setCurrentEvent({ title: "添加一项新事件", tasks: [] });
        } else {
          setCurrentEvent(result[0]);
        }
        return result;
      });
    }
  };
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    // const { source, destination } = result;
    // // Remove from source
    // const taskCopy = currentEvent[source.droppableId][source.index];
  };

  return (
    <div className="task-box">
      <header className="task-box-header">
        <h1 className="task-box-title">所有任务</h1>
        <button className="remove-button" onClick={handleRemove}>
          删除该事件
        </button>
      </header>
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <div className="task-box-body">
          <Column tag="To Do" events={events} setEvents={setEvents} currentEvent={currentEvent} />
          <Column
            tag="In Progress"
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
          <Column
            tag="Completed"
            events={events}
            setEvents={setEvents}
            currentEvent={currentEvent}
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBox;
