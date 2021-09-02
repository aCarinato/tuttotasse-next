const RadioItem = ({ option }) => {
  return (
    <label className="radio-container">
      {option}
      <input type="radio" name="select-proprietá" value={option} />
      <span className="checkmark"></span>
    </label>
  );
};

export default RadioItem;
