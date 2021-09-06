import RadioItem from './RadioItem';

const RadioItems = ({ labelRadio, options, onChange }) => {
  return (
    <form>
      <fieldset>
        <div className="col-60">
          <label className="label-radio">{labelRadio}</label>
        </div>

        <div onChange={onChange} className="col-40">
          {options.map((option, index) => (
            <RadioItem key={index} option={option} />
          ))}
        </div>
      </fieldset>
    </form>
  );
};

export default RadioItems;
