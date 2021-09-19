import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '100vw',
  },
  bookingsWrapper: {
    backgroundColor: 'rgb(250, 250, 250)',
  },
  bookingsList: {
    padding: '5% 3% 0 3%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  bookingsCardNext: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
  },
  bookingsCardContainer: {
    maxHeight: '80vh',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollableBox: {
    paddingRight: '3px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '3px',
      height: '50px',
      backgroundColor: 'rgba(168, 168, 168, 0.7)',
    },
  },
  bookingsCardItem: {
    alignItems: 'unset',
    width: '280px',
    height: '86px',
    marginBottom: '8px',
  },
  bookingsCardContent: {
    padding: '8px 8px 0 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconSettings: {
    fill: 'rgba(0,0,0,0.2)',
    height: '15px',
    cursor: 'pointer',
  },
  typographyCurrent: {
    fontWeight: 900,
    fontSize: '10px',
    padding: '10px 0 10px 16px',
    alignSelf: 'start',
  },
  typographyPast: {
    fontWeight: 900,
    fontSize: '10px',
    padding: '10px 0 10px 0',
    alignSelf: 'start',
  },
  bookingsCalendar: {
    padding: '5% 3% 0 3%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  calendarContainer: {
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-body1': {
      color: 'rgb(240, 69, 69)',
      fontWeight: '400',
    },
    '& .MuiPickersDay-day': {
      padding: '0 20px',
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: 'unset',
      color: 'unset',
    },
    '& .MuiPickersDay-daySelected:hover': {
      backgroundColor: 'rgb(245, 245, 245)',
      color: 'unset',
    },
    '& .MuiTypography-caption': {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    '& .MuiSvgIcon-root': {
      color: 'rgba(0,0,0,0.2)',
    },
  },
  customSelectedDay: {
    '& button': {
      backgroundColor: 'rgb(240, 69, 69)',
      color: 'white',
    },
    '& button:hover': {
      backgroundColor: 'rgb(240, 69, 69)',
    },
  },
}));

export default useStyles;
