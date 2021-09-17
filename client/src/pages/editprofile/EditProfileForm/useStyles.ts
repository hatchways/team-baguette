import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: '3rem',
    whiteSpace: 'nowrap',
  },
  inputs: {
    height: '2.5rem',
    padding: '5px',
    marginLeft: '10px',
  },
  grid: { maxwidth: '600px' },
  select: {
    width: '100%',
    height: '3rem',
  },
  selectHalf: {
    width: '40%',
    height: '3rem',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#f04040',
    fontWeight: 'bold',
  },
  modal: {
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    WebkitTransform: 'translate(-50%,-50%)',
    width: '30%',
    minWidth: '300px',
    height: '15%',
    backgroundColor: 'white',
    padding: '10px',
  },
  modalContent: { position: 'relative', margin: 'auto', padding: '20px', width: '90%' },
  close: {
    color: '#aaaaaa',
    fontSize: '28px',
    fontWeight: 'bold',
    position: 'absolute',
    right: '5px',
    top: '-10px',
  },
}));

export default useStyles;
