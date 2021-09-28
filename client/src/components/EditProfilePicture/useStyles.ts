import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    padding: '4em 2em 4em 2em',
  },
  picture: {
    padding: '2em',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bolder',
  },
  subheader: { fontSize: '1em', marginTop: ' 1em', textAlign: 'center', color: 'grey' },
  avatar: {
    height: '10em',
    width: '10em',
  },
  button: {
    padding: '1em 3em 1em 3em',
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
