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

  return (
    <div className="task-box">
      <header className="task-box-header">
        <h1 className="task-box-title">所有任务</h1>
        <button className="remove-button" onClick={handleRemove}>
          删除该事件
        </button>
      </header>
      <div className="task-box-body">
        <Column tag="待安排" />
        <Column tag="进行中" />
        <Column tag="已完成" />
      </div>
    </div>
  );
};

export default TaskBox;
