import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 32,
    paddingBottom: 20,
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
}));

export default useStyles;
