import { makeStyles } from '@material-ui/core/styles';

const bannerHeight = 8;
const avatarHeight = bannerHeight * 0.75;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bolder',
    textTransform: 'capitalize',
  },
  subheader: { fontSize: '1em', marginTop: ' .5em', textAlign: 'center', color: 'grey' },
  location: {
    textAlign: 'center',
    fontSize: '.75em',
    color: 'grey',
  },
  avatar: {
    height: `${avatarHeight}em`,
    width: `${avatarHeight}em`,
    borderColor: 'white',
    border: '7px solid',
    position: 'absolute',
    top: `${bannerHeight / 2}em`,
  },
  profileName: {
    marginTop: `${(bannerHeight - avatarHeight / 2) / 2}em`,
  },
  banner: {
    height: `${bannerHeight}em`,
  },
  modalImage: {
    height: '40em',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  icon: {
    color: 'white',
  },
}));

export default useStyles;
