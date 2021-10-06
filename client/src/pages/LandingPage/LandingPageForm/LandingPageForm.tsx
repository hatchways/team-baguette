import useStyles from './useStyles';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function LandingPageForm(): JSX.Element {
  const classes = useStyles();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleStartDate = (value: Date | null) => {
    setStartDate(value);
  };

  const handleEndDate = (value: Date | null) => {
    setEndDate(value);
  };

  return (
    <form>
      <Box className={classes.landingFormContainer}>
        <Typography className={classes.landingFormTitle}>Find the care your dog deserves</Typography>
        <Box className={classes.landingWhere}>
          <InputLabel className={classes.inputLabels}>Where</InputLabel>
          <TextField variant={'outlined'} className={classes.landingWhereField} />
        </Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box className={classes.landingWhen}>
            <InputLabel className={classes.inputLabels}>Drop In / Drop Off</InputLabel>
            <DatePicker
              format="MM/dd/yyyy"
              onChange={handleStartDate}
              value={startDate}
              inputVariant={'outlined'}
              className={classes.landingWhenField}
            />
            <DatePicker
              format="MM/dd/yyyy"
              onChange={handleEndDate}
              value={endDate}
              inputVariant={'outlined'}
              className={classes.landingWhenField}
            />
          </Box>
        </MuiPickersUtilsProvider>
        <Box className={classes.buttonContainer}>
          <Button variant="contained" size="large" color="secondary" type="submit" className={classes.findButton}>
            Find my dog sitter
          </Button>
        </Box>
      </Box>
    </form>
  );
}
