import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const TaskBox = ({ events, setEvents, currentEvent, setCurrentEvent }) => {
  const handleRemove = () => {
    if (confirm("是否确认删除该事件？")) {
      setEvents((prev) => {
        const result = prev.filter((item) => item.title != currentEvent.title);
        if (!result.length) {
          const initEvent = [
            {
              title: "添加一项新事件",
              ["To Do"]: [],
              ["In Progress"]: [],
              ["Completed"]: [],
            },
          ];
          setEvents(initEvent);
        } else {
          setCurrentEvent(result[0]);
        }
        return result;
      });
    }
  };
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const curEvent = events.find((item) => item.title === currentEvent.title);
    const taskCopy = curEvent[source.droppableId][source.index];

    setEvents((prev) =>
      prev.map((event) => {
        if (event.title === currentEvent.title) {
          let eventCopy = { ...event };

          // 从原来的任务栏删除选中任务
          const taskListSource = event[source.droppableId];
          taskListSource.splice(source.index, 1);
          eventCopy = { ...event, [source.droppableId]: taskListSource };

          // 将选中任务添加到新的任务栏
          const taskListDes = event[destination.droppableId];
          taskListDes.splice(destination.index, 0, taskCopy);
          eventCopy = { ...event, [destination.droppableId]: taskListDes };
          return eventCopy;
        } else {
          return event;
        }
      })
    );
  };

  let screenWidth = window.screen.width - 300;

  return (
    <div className="task-box" style={{ width: screenWidth }}>
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
