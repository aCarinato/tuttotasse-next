const RadioItem = ({ option, id }) => {
  const key = { id };
  return (
    <label className="radio-container">
      {option}
      <input type="radio" name="select-proprietá" value={option} />
      <span className="checkmark"></span>
    </label>
  );
};

export default RadioItem;
