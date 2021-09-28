import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    paddingLeft: '5px',
    textTransform: 'uppercase',
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '5px',
    fontFamily: 'Poppins-Regular',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3A8DFF',
    display: 'none',
  },
  submit: {
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 14,
    backgroundColor: 'rgb(240, 69, 69)',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 1.1,
  },
}));

export default useStyles;
