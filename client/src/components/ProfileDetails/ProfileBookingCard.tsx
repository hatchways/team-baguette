import { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useStyles from './useStyles';
import { Profile } from '../../interface/Profile';

interface Props {
  profile: Profile;
}

export default function ProfileBookingCard({ profile }: Props): JSX.Element {
  const classes = useStyles();
  const [dropIn, setDropIn] = useState({ date: '', time: '' });
  const [dropOff, setDropOff] = useState({ date: '', time: '' });

  const changeDropInHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    setDropIn({ ...dropIn, [target.name]: target.value });
  };

  const changeDropOffHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    setDropOff({ ...dropOff, [target.name]: target.value });
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
        <CardContent>
          <TextField
            onChange={changeDropInHandler}
            value={dropIn.date}
            variant="outlined"
            name="date"
            label="Drop In"
            required
            id="Drop-in-date"
            type="date"
            InputLabelProps={{ shrink: true }}
            className={classes.dateFields}
          />
          <TextField
            onChange={changeDropInHandler}
            value={dropIn.time}
            variant="outlined"
            id="Drop-in-time"
            name="time"
            type="time"
            InputLabelProps={{ shrink: true }}
            className={classes.timeFields}
          />
        </CardContent>
        <CardContent>
          <TextField
            onChange={changeDropOffHandler}
            value={dropOff.date}
            name="date"
            variant="outlined"
            label="Drop Off"
            required
            id="Drop-off-date"
            type="date"
            InputLabelProps={{ shrink: true }}
            className={classes.dateFields}
          />
          <TextField
            onChange={changeDropOffHandler}
            value={dropOff.time}
            variant="outlined"
            id="Drop-off-time"
            name="time"
            type="time"
            InputLabelProps={{ shrink: true }}
            className={classes.timeFields}
          />
        </CardContent>
        <CardContent className={classes.profileCardContent}>
          <Button variant="contained" color="secondary" className={classes.button}>
            Send Request
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
