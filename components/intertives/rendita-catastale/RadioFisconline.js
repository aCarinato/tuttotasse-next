import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioFisconline = ({ value, onRadioChange }) => {
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?:
        </FormLabel>
        <RadioGroup
          aria-label="fisconline"
          name="fisconline"
          value={value}
          onChange={(e) => onRadioChange(e)}
        >
          <FormControlLabel value="Si" control={<Radio />} label="Si" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioFisconline;
