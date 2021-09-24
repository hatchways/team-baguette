import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Settings from '@material-ui/icons/Settings';
import Box from '@material-ui/core/Box';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ReactElement, useEffect, useState } from 'react';
import { ReqValue } from '../../interface/Request';
import { getRequests } from '../../helpers/APICalls/requests';
import RequestMenu from '../../components/RequestMenu/RequestMenu';

export default function Bookings(): JSX.Element {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState<Date>(new Date());
  const [dateReqs, setDateReqs] = useState(new Array<ReqValue>());
  const [nextReq, setNextReq] = useState<ReqValue>({
    _id: '-',
    user: {
      username: 'No Accepted Requests',
      _id: '-',
    },
    sitterId: '-',
    accepted: false,
    declined: false,
    dogType: '-',
    end: new Date(),
    paid: false,
    specialNotes: '-',
    start: new Date(),
  });

  useEffect(() => {
    getRequests().then((data) => {
      if (data) {
        setDateReqs(data);
        const nearestReq = data.find((ele) => new Date(ele.start).getTime() >= selectedDate.getTime() && ele.accepted);
        nearestReq && setNextReq(nearestReq);
      }
    });
  }, [selectedDate]);

  const renderDayCalendar = (
    day: Date | null,
    selectedDay: Date | null,
    currentMonth: boolean,
    DayComponent: ReactElement,
  ) => {
    const days = day ? day.getTime() : null;
    const stateDays = dateReqs.filter((el) => el.accepted).map((el) => new Date(el.start).getTime());
    if (days === stateDays.find((el) => el === days && days >= selectedDate.getTime())) {
      return <div className={classes.customSelectedDay}>{DayComponent}</div>;
    }
    return DayComponent;
  };

  return (
    <Grid container className={`${classes.root}`}>
      <Grid xs={12} item className={classes.bookingsWrapper} container>
        <Grid item xs={5} className={classes.bookingsList} container direction={'column'} spacing={1}>
          <Grid item>
            {nextReq && (
              <Card key={nextReq._id} elevation={2} className={classes.bookingsCardNext}>
                <Typography className={classes.typographyCurrent}>YOUR NEXT BOOKING:</Typography>
                <CardContent className={classes.bookingsCardContent}>
                  <Typography variant={'h6'} noWrap display={'inline'}>
                    {new Date(nextReq.start).toDateString()}
                  </Typography>
                  <RequestMenu
                    ind={nextReq._id}
                    eleId={nextReq._id}
                    setDateReqs={setDateReqs}
                    dateReqs={dateReqs}
                    selectedDate={selectedDate}
                    setNextReq={setNextReq}
                  />
                </CardContent>
                <CardHeader className={classes.iconStatus} avatar={'avatar'} title={`${nextReq.user.username}`} />
              </Card>
            )}
          </Grid>

          <Grid item>
            <Card elevation={2} className={classes.bookingsCardContainer}>
              <Box className={classes.scrollableBox}>
                <Typography className={classes.typographyPast}>CURRENT BOOKINGS:</Typography>
                {!!dateReqs.length &&
                  dateReqs.map((ele, ind) =>
                    selectedDate.getTime() < new Date(ele.start).getTime() ? (
                      <Card key={ele._id} variant={'outlined'} className={classes.bookingsCardItem}>
                        <CardContent className={classes.bookingsCardContent}>
                          <Typography variant={'h6'} noWrap display={'inline'}>
                            {new Date(ele.start).toDateString()}
                          </Typography>
                          <RequestMenu
                            ind={ind}
                            eleId={ele._id}
                            setDateReqs={setDateReqs}
                            dateReqs={dateReqs}
                            selectedDate={selectedDate}
                            setNextReq={setNextReq}
                          />
                        </CardContent>
                        <CardHeader
                          className={classes.iconStatus}
                          avatar={'avatar'}
                          title={`${ele.user.username}`}
                          action={ele.accepted ? 'ACCEPTED' : ele.declined ? 'DECLINED' : 'PENDING'}
                        />
                      </Card>
                    ) : null,
                  )}

                <Typography className={classes.typographyPast}>PAST BOOKINGS:</Typography>
                {!!dateReqs.length &&
                  dateReqs.map((ele) =>
                    new Date(ele.start).getTime() < selectedDate.getTime() ? (
                      <Card key={ele._id} variant={'outlined'} className={classes.bookingsCardItem}>
                        <CardContent className={classes.bookingsCardContent}>
                          <Typography variant={'h6'} noWrap display={'inline'}>
                            {new Date(ele.start).toDateString()}
                          </Typography>
                          <Settings className={classes.iconSettings} />
                        </CardContent>
                        <CardHeader
                          className={classes.iconStatus}
                          avatar={'avatar'}
                          title={`${ele.user.username}`}
                          action={ele.accepted ? 'ACCEPTED' : ele.declined ? 'DECLINED' : 'PENDING'}
                        />
                      </Card>
                    ) : null,
                  )}
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={7} className={classes.bookingsCalendar} direction={'column'} container>
          <Paper elevation={2} className={classes.calendarContainer}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {dateReqs.length ? (
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
              ) : (
                <DatePicker
                  autoOk
                  disableToolbar
                  orientation="landscape"
                  variant="static"
                  value={selectedDate}
                  disabled
                  onChange={() => handleDateChange(new Date())}
                />
              )}
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
