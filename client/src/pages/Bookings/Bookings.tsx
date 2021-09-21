import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Settings from '@material-ui/icons/Settings';
import Box from '@material-ui/core/Box';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ReactElement, useState } from 'react';

export default function Bookings(): JSX.Element {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState<Date>(new Date());
  const dateTester = useState<Date>(new Date('09/13/2021'));

  const renderDayCalendar = (
    day: Date | null,
    selectedDay: Date | null,
    currentMonth: boolean,
    DayComponent: ReactElement,
  ) => {
    // const days = day ? day.getTime() : null;
    // const stateDays = dateReqs.filter((el) => el.accepted).map((el) => new Date(el.start).getTime());
    // if (days === stateDays.find((el) => el === days && days >= selectedDate.getTime())) {
    //   return <div className={classes.customSelectedDay}>{DayComponent}</div>;
    // }
    return DayComponent;
  };

  return (
    <Grid container className={`${classes.root}`}>
      <Grid xs={12} item className={classes.bookingsWrapper} container>
        <Grid item xs={5} className={classes.bookingsList} container direction={'column'} spacing={1}>
          <Grid item>
            <Card elevation={2} className={classes.bookingsCardNext}>
              <Typography className={classes.typographyCurrent}>YOUR NEXT BOOKING:</Typography>
              <CardContent className={classes.bookingsCardContent}>
                <Typography variant={'h6'} noWrap display={'inline'}>
                  17 Sept 2021, 10-12AM
                </Typography>
                <Settings className={classes.iconSettings} />
              </CardContent>
              <CardHeader avatar={'avatar'} title={'logan test name'} action={'status'} />
            </Card>
          </Grid>

          <Grid item>
            <Card elevation={2} className={classes.bookingsCardContainer}>
              <Typography className={classes.typographyCurrent}>CURRENT BOOKINGS:</Typography>
              <Box className={classes.scrollableBox}>
                <Card variant={'outlined'} className={classes.bookingsCardItem}>
                  <CardContent className={classes.bookingsCardContent}>
                    <Typography variant={'h6'} noWrap display={'inline'}>
                      17 Sept 2021, 10-12AM
                    </Typography>
                    <Settings className={classes.iconSettings} />
                  </CardContent>
                  <CardHeader avatar={'avatar'} title={'logan test name'} action={'status'} />
                </Card>

                <Typography className={classes.typographyPast}>PAST BOOKINGS:</Typography>
                <Card variant={'outlined'} className={classes.bookingsCardItem}>
                  <CardContent className={classes.bookingsCardContent}>
                    <Typography variant={'h6'} noWrap display={'inline'}>
                      17 Sept 2021, 10-12AM
                    </Typography>
                    <Settings className={classes.iconSettings} />
                  </CardContent>
                  <CardHeader avatar={'avatar'} title={'logan test name'} action={'status'} />
                </Card>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={7} className={classes.bookingsCalendar} direction={'column'}>
          <Paper elevation={2} className={classes.calendarContainer}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                autoOk
                disableToolbar
                orientation="landscape"
                variant="static"
                value={selectedDate}
                disabled
                renderDay={(day, selectedDay, currentMonth, DayComponent) =>
                  renderDayCalendar(day, selectedDay, currentMonth, DayComponent)
                }
                onChange={() => handleDateChange(new Date())}
              />
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
