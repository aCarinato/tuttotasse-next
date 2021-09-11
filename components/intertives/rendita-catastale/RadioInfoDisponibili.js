import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import StyledRadio from '../../styled-elements/StyledRadio';

const RadioInfoDisponibili = ({ value, onRadioChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <Grid container>
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <CardContent>
                {/* <FormLabel component="legend"> */}
                <Typography>
                  Informazioni sull immobile di cui é a disposizione:
                </Typography>
                {/* </FormLabel> */}
              </CardContent>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <CardContent>
              {isMobile && (
                <Typography>
                  Informazioni sull immobile di cui é a disposizione:
                </Typography>
              )}
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">
              Informazioni sull immobile di cui é a disposizione:
            </FormLabel> */}
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
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default RadioInfoDisponibili;
