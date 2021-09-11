import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import useStyles from '../../../utils/styles';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

const RadioProprieta = ({ value, onRadioChange }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <Typography>Proprietá immobile</Typography>
            </FormLabel>
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RadioProprieta;
