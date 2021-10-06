import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    paddingBottom: 19,
    color: '#000000',
    fontWeight: 700,
    marginBottom: '50px',
  },
  profileLabel: {
    color: 'gray',
    marginBottom: '20px',
  },
  card: {
    maxWidth: '300px',
    height: '180px',
    paddingLeft: '10px',
    paddingTop: '5px',
  },
  cardLogo: {
    maxWidth: '90px',
  },
  number: {
    fontWeight: 1000,
  },
  exp: {
    color: 'gray',
    fontSize: 12,
  },
  name: {
    fontWeight: 1000,
    marginTop: '20px',
  },
  button: {
    padding: 10,
    width: 230,
    height: 56,
    fontSize: 12,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    color: '#f04040',
    backgroundColor: 'white',
    border: '1px solid #f04040',
    fontWeight: 'bold',
  },
  modal: {
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    WebkitTransform: 'translate(-50%,-50%)',
    width: '400px',
    height: '400px',
    backgroundColor: 'white',
    padding: '10px',
  },
  modalContent: { position: 'relative', margin: 'auto', padding: '15px', width: '90%' },
  inputs: {
    height: '1.5rem',
    paddingLeft: '5px',
    paddingTop: '5px',
    border: '1px solid lightgray',
    borderRadius: theme.shape.borderRadius,
  },
  inputLabels: {
    fontWeight: 'bold',
    lineHeight: '3rem',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
