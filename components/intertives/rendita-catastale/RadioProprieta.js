// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import useStyles from '../../../utils/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import StyledRadio from '../../styled-elements/StyledRadio';

const RadioProprieta = ({ value, onRadioChange }) => {
  // const classes = useStyles();
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
                <Typography>Proprietá immobile</Typography>
                {/* </FormLabel> */}
              </CardContent>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <CardContent>
              {isMobile && <Typography>Proprietá immobile</Typography>}
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">
                <Typography>Proprietá immobile</Typography>
              </FormLabel> */}
                <RadioGroup
                  aria-label="proprieta"
                  name="proprieta"
                  value={value}
                  onChange={(e) => onRadioChange(e)}
                >
                  <FormControlLabel
                    value="Immobile di Proprietá"
                    control={<StyledRadio />}
                    label="Immobile di Proprietá"
                  />
                  <FormControlLabel
                    value="Immobile Non di Proprietá"
                    control={<StyledRadio />}
                    label="Immobile Non di Proprietá"
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

export default RadioProprieta;
