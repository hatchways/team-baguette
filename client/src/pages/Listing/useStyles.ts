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
  inputs: {
    height: '2rem',
    padding: '4px',
    marginLeft: '10px',
  },
  card: {
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    height: '30vh',
    maxWidth: '345px',
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
    color: 'gray',
    fontSize: 11,
  },
  price: {
    fontWeight: 900,
  },
}));

export default useStyles;
