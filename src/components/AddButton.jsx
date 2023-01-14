const AddButton = ({ handleClick }) => {
  return (
    <div className="add-button" onClick={handleClick}>
      <img src="src/assets/icons/add.svg" alt="add" className="icon" />
    </div>
  );
};

export default AddButton;
