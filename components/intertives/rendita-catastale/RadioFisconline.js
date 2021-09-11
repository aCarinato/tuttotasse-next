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

const RadioFisconline = ({ value, onRadioChange }) => {
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
                  Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?:
                </Typography>
                {/* </FormLabel> */}
              </CardContent>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <CardContent>
              {isMobile && (
                <Typography>
                  Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?:
                </Typography>
              )}
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">
              Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?:
            </FormLabel> */}
                <RadioGroup
                  aria-label="fisconline"
                  name="fisconline"
                  value={value}
                  onChange={(e) => onRadioChange(e)}
                >
                  <FormControlLabel
                    value="Si"
                    control={<StyledRadio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value="No"
                    control={<StyledRadio />}
                    label="No"
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

export default RadioFisconline;
