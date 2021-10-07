import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  navBarContainer: {
    height: '60px',
    width: '100vw',
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 10px rgba(0,0,0,0.2)',
    marginBottom: 25,
  },
  navBarItem: {
    margin: '15px 30px 15px 30px',
    display: 'flex',
    alignItems: 'center',
  },
  navBarItemRight: {
    margin: '0',
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
  becomeSitter: {
    fontFamily: 'Poppins-Bold',
    textDecoration: 'underline',
    cursor: 'pointer',
    margin: '0 10px 0 10px',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  signUp: {
    padding: 15,
    marginRight: 5,
    width: 90,
    height: 33,
    borderRadius: '3px',
    fontSize: 11,
    backgroundColor: 'rgb(240, 69, 69)',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(240, 69, 69)',
    },
  },
  login: {
    padding: 15,
    marginRight: 5,
    width: 90,
    height: 33,
    borderRadius: '3px',
    fontSize: 11,
    color: 'rgb(240, 69, 69)',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Regular',
    boxShadow: 'none',
    border: '1px solid rgb(240, 69, 69)',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  userOptions: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    margin: '0 10px',
  },
  userAvatar: {
    height: 30,
    width: 'auto',
    fill: 'grey',
    margin: '0 15px',
  },
  routerLinkDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default useStyles;
