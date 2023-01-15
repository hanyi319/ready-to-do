const AddTaskButton = ({ handleClick }) => {
  return (
    <div className="add-task-button" onClick={handleClick}>
      <img src="src/assets/icons/add.svg" alt="add" className="icon" />
    </div>
  );
};

export default AddTaskButton;
