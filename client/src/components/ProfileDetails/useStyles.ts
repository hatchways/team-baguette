import { makeStyles } from '@material-ui/core/styles';

const bannerHeight = 8;
const avatarHeight = bannerHeight * 0.75;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  cardBody: {
    padding: '1em',
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
  button: {
    padding: '2em 5em 2em 5em',
    textTransform: 'uppercase',
  },
  price: {
    fontWeight: 900,
  },
}));

export default useStyles;
