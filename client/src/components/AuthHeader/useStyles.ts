import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'Poppins-Bold',
  },
  accAside: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginRight: 5,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: {
    textDecoration: 'underlined',
    color: 'rgb(240, 69, 69)',
  },
}));

export default useStyles;
