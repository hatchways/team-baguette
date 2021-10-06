import { makeStyles } from '@material-ui/core/styles';
import LandingDogs from '../../Images/landing-dogs.jpg';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    color: 'red',
    height: '100vh',
    display: 'flex',
  },
  rightBox: {
    width: '100%',
    backgroundImage: `url(${LandingDogs})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  fauxHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '15px 15px 0 0',
  },
  becomeSitter: {
    fontFamily: 'Poppins-Bold',
    textDecoration: 'underline',
    cursor: 'pointer',
    margin: '0 10px',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    transition: '0.3s',
    '&:hover': {
      color: 'rgba(255, 255, 255, 1)',
    },
  },
  signUp: {
    padding: 15,
    width: 90,
    height: 33,
    borderRadius: '3px',
    fontSize: 11,
    backgroundColor: theme.palette.primary.main,
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    boxShadow: 'none',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'rgba(255, 255, 255, 1)',
    },
  },
  login: {
    padding: 15,
    marginRight: 10,
    width: 90,
    height: 33,
    borderRadius: '3px',
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    boxShadow: 'none',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    backgroundColor: 'transparent',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 1)',
    },
  },
  leftBox: {
    width: '100%',
    color: 'black',
  },
  fauxHeaderLeft: {
    margin: '15px 30px 10% 30px',
    display: 'flex',
    alignItems: 'center',
  },
  pawIcon: {
    fill: 'rgb(240, 69, 69)',
    height: '32px',
    width: 'auto',
  },
  navTitle: {
    fontFamily: 'Poppins-Bold',
    paddingLeft: 10,
    fontSize: '18px',
  },
}));

export default useStyles;
