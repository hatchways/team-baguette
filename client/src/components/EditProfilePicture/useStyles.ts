import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 41,
    marginRight: 41,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: '2em',
    paddingBottom: '2em',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0.5,
    paddingTop: '5em',
    paddingBottom: '5em',
    alignItems: 'center',
  },
  picture: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2em',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bolder',
  },
  subheader: { fontSize: '1em', marginTop: ' 1em', textAlign: 'center', color: 'grey' },
  avatar: {
    height: '10em',
    width: '10em',
    backgroundColor: 'pink',
  },
  button: {
    padding: '1em 3em 1em 3em',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  error: {
    backgroundColor: 'red',
    color: 'white',
  },
  success: {
    backgroundColor: 'green',
  },
}));

export default useStyles;
