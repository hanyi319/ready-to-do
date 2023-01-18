import add from "/src/assets/icons/add.svg";

const AddTaskButton = ({ handleClick }) => {
  return (
    <div className="add-task-button" onClick={handleClick}>
      <img src={add} alt="add" className="icon" />
    </div>
  );
};

export default AddTaskButton;
