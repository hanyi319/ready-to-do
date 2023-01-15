const AddEventButton = ({ handleClick }) => {
  return (
    <div className="add-event-button" onClick={handleClick}>
      <img src="src/assets/icons/add.svg" alt="add" className="icon" />
    </div>
  );
};

export default AddEventButton;
