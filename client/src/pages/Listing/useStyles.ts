import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 26,
    textAlign: 'center',
    paddingBottom: 19,
    color: '#000000',
    fontWeight: 700,
  },
  search: {
    marginTop: '1vh',
    marginBottom: '5vh',
    display: 'flex',
    justifyContent: 'center',
  },
  inputBox: {
    position: 'relative',
    border: '1px solid lightgray',
    display: 'flex',
    justifyContent: 'center',
  },
  dateInput: {
    width: '8vw',
  },
  inputIcon: {
    position: 'absolute',
    left: '5px',
    top: '10px',
  },
  inputs: {
    width: '100%',
    height: '2rem',
    padding: '4px',
    marginLeft: '30px',
  },
  reset: {
    color: 'gray',
    fontSize: '15px',
    position: 'absolute',
    right: '13px',
    top: '7px',
    zIndex: 1,
  },
  card: {
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    height: '30vh',
    position: 'relative',
  },
  cardButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  avatar: {
    borderRadius: '50%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '50%',
    width: '80px',
    height: '80px',
  },
  fullName: {
    textAlign: 'center',
    fontWeight: 1000,
    fontSize: 15,
    letterSpacing: '-1px',
  },
  intro: {
    textAlign: 'center',
    fontSize: 11,
    letterSpacing: '-1px',
    color: 'gray',
  },
  rating: {
    width: '90px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '4px',
    marginBottom: '3px',
    height: '1.5vh',
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: '-1px',
  },
  bottomContent: {
    position: 'absolute',
    width: '100%',
    height: '5vh',
    bottom: 0,
    left: 0,
    borderTop: '1px solid lightgray',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  address: {
    marginLeft: '-35px',
    color: 'gray',
    fontSize: 11,
    lineHeight: '5vh',
  },
  button: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    textTransform: 'uppercase',
    margin: '0 auto',
    marginTop: '4vh',
    display: 'block',
  },
}));

export default useStyles;
