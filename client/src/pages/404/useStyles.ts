import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-evenly',
  },
  content: {
    display: 'flex',
    flexGrow: 8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingBottom: '5rem',
    paddingTop: '1rem',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bolder',
    textTransform: 'uppercase',
  },
  subheader: {
    fontSize: 30,
    fontWeight: 'bolder',
    color: 'grey',
  },
  image: {
    width: '100%',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
}));

export default useStyles;
