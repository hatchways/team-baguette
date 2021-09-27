import { makeStyles } from '@material-ui/core/styles';

const avatarHeight = '7em';
const bannerHeight = 10;

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 41,
    marginRight: 41,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: '2em',
    paddingBottom: '2em',
  },
  card: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bolder',
    textTransform: 'capitalize',
  },
  subheader: { fontSize: '1.25em', marginTop: ' .5em', textAlign: 'center', color: 'grey' },
  location: {
    fontSize: '1.25em',
    color: 'grey',
  },
  avatar: {
    height: avatarHeight,
    width: avatarHeight,
    borderColor: 'white',
    border: '7px solid',
    position: 'absolute',
    top: '75px',
  },
  profileName: {
    marginTop: `${bannerHeight / 2}em`,
  },
  banner: {
    height: `${bannerHeight}em`,
  },
  icon: {
    color: 'green',
    height: '30em',
    alignSelf: 'center',
    justifySelf: 'center',
  },
}));

export default useStyles;
