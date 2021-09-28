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
  const [dropIn, setDropIn] = useState({ date: new Date(), time: '' });
  const [dropOff, setDropOff] = useState({ date: new Date(), time: '' });

  const changeDropInHandler = (event: any) => {
    event.preventDefault();
    setDropIn({ ...dropIn, [event.target.name]: event.target.value });
  };

  const changeDropOffHandler = (event: any) => {
    event.preventDefault();
    setDropOff({ ...dropOff, [event.target.name]: event.target.value });
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Card className={`${classes.root} ${classes.cardBody}`} elevation={20}>
        <CardContent style={{ textAlign: 'center' }}>
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
          />
          <TextField
            onChange={changeDropInHandler}
            value={dropIn.time}
            variant="outlined"
            id="Drop-in-time"
            name="time"
            type="time"
            InputLabelProps={{ shrink: true }}
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
          />
          <TextField
            onChange={changeDropOffHandler}
            value={dropOff.time}
            variant="outlined"
            id="Drop-off-time"
            name="time"
            type="time"
            InputLabelProps={{ shrink: true }}
          />
        </CardContent>
        <CardContent style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => console.log(dropIn, dropOff)}
          >
            Send Request
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
