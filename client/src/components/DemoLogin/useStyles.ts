import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  demoSubmit: {
    margin: theme.spacing(1, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 14,
    backgroundColor: 'rgb(240, 69, 69)',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
}));

export default useStyles;
