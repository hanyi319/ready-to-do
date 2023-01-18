import add from "/src/assets/icons/add.svg";

const AddEventButton = ({ handleClick }) => {
  return (
    <div className="add-event-button" onClick={handleClick}>
      <img src={add} alt="add" className="icon" />
    </div>
  );
};

export default AddEventButton;
