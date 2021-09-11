import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import StyledRadio from '../../styled-elements/StyledRadio';

const RadioInfoDisponibili = ({ value, onRadioChange }) => {
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Informazioni sull immobile di cui é a disposizione:
            </FormLabel>
            <RadioGroup
              aria-label="infoDisponibili"
              name="infoDisponibili"
              value={value}
              onChange={(e) => onRadioChange(e)}
            >
              <FormControlLabel
                value="Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)"
                control={<StyledRadio />}
                label="Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)"
              />
              <FormControlLabel
                value="Indirizzo"
                control={<StyledRadio />}
                label="Indirizzo"
              />
              <FormControlLabel
                value="Identificativi catastali (foglio, particella, subalterno)"
                control={<StyledRadio />}
                label="Identificativi catastali (foglio, particella, subalterno)"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RadioInfoDisponibili;
