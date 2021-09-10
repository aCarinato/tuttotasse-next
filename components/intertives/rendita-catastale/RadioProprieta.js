import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioProprieta = ({ value, onRadioChange }) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Proprietá immobile</FormLabel>
        <RadioGroup
          aria-label="proprieta"
          name="proprieta"
          value={value}
          onChange={(e) => onRadioChange(e)}
        >
          <FormControlLabel
            value="Immobile di Proprietá"
            control={<Radio />}
            label="Immobile di Proprietá"
          />
          <FormControlLabel
            value="Immobile Non di Proprietá"
            control={<Radio />}
            label="Immobile Non di Proprietá"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioProprieta;
