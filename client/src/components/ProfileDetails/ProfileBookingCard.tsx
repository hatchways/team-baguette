import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Card, CardContent, Typography, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Rating from '@material-ui/lab/Rating';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import useStyles from './useStyles';
import { Profile } from '../../interface/Profile';
import { createReqs } from '../../helpers/APICalls/requests';
import { useSnackBar } from '../../context/useSnackbarContext';

interface Props {
  profile: Profile;
}

export default function ProfileBookingCard({ profile }: Props): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  const { user } = profile;
  // TODO make the default dropIn & dropOff states equal to the first available dates( or whatever makes sense)
  const [dropInDate, setDropInDate] = useState<MaterialUiPickersDate>();
  const [dropInTime, setDropInTime] = useState<MaterialUiPickersDate>();
  const [dropOffDate, setDropOffDate] = useState<MaterialUiPickersDate>();
  const [dropOffTime, setDropOffTime] = useState<MaterialUiPickersDate>();

  const disableDates = (day: MaterialUiPickersDate): boolean => {
    // TODO
    // figure out the logic of how Available Days, etc Workspaces. right now, not sure. Depending on how that works,currently planning on
    // doing some kind of Set based on the available dates (from the profile object), and returning true unless the date exists within that Set.
    // This should be applied to both DatePickers
    return false;
  };

  const submitHandler = async () => {
    const sitterId = user.id;
    if (dropInDate && dropOffDate) {
      const startDate = dropInDate?.toString();
      const endDate = dropOffDate?.toString();
      await createReqs(sitterId, startDate, endDate).then((data) => {
        if (data.error) {
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          updateSnackBarMessage('Request has been successfully created. Please wait for confirmation from sitter');
          history.push('/dashboard');
        }
      });
    } else {
      updateSnackBarMessage('Please make sure all date fields are filled out before submitting');
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Card className={`${classes.root} ${classes.cardBody}`} elevation={20}>
        <CardContent className={classes.profileCardContent}>
          <Typography variant="h5" gutterBottom className={classes.price}>
            $14/hr
          </Typography>
          <Rating readOnly value={3.25} precision={0.5} />
        </CardContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CardContent>
            <DatePicker
              label="Drop In"
              required
              id="Drop-in-date"
              autoOk
              InputLabelProps={{ shrink: true }}
              inputVariant="outlined"
              className={classes.dateFields}
              onChange={setDropInDate}
              value={dropInDate}
              shouldDisableDate={disableDates}
              minDate={new Date()}
            />
            <TimePicker
              required
              id="Drop-in-time"
              autoOk
              InputLabelProps={{ shrink: true }}
              inputVariant="outlined"
              className={classes.timeFields}
              onChange={setDropInTime}
              value={dropInTime}
            />
          </CardContent>
          <CardContent>
            <DatePicker
              label="Drop Off"
              required
              id="Drop-off-date"
              autoOk
              inputVariant="outlined"
              InputLabelProps={{ shrink: true }}
              className={classes.dateFields}
              onChange={setDropOffDate}
              value={dropOffDate}
              minDate={new Date()}
            />
            <TimePicker
              required
              id="Drop-off-Time"
              autoOk
              InputLabelProps={{ shrink: true }}
              inputVariant="outlined"
              className={classes.timeFields}
              onChange={setDropOffTime}
              value={dropOffTime}
            />
          </CardContent>
        </MuiPickersUtilsProvider>
        <CardContent className={classes.profileCardContent}>
          <Button variant="contained" color="secondary" className={classes.button} onClick={submitHandler}>
            Send Request
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
