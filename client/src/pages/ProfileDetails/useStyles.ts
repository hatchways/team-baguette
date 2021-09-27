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
  mainContent: {
    display: 'flex',
    flexGrow: 8,
    flexDirection: 'column',
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
  },
}));

export default useStyles;
