import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 21,
    paddingRight: 21,
    height: '80vh',
    boxShadow: '0 3px 10px 0 gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 15,
  },
  conversationContainer: {
    overflowY: 'scroll',
    height: '80%',
  },
  conversation: {
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    padding: '0 .5rem 0 0.25rem',
    borderBottom: '1px solid gray',

    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  avatar: {
    border: '2px solid white',
    backgroundColor: 'white',
  },
  content: {
    marginLeft: 20,
    flexGrow: 1,
  },
  name: {
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: 'gray',
    maxWidth: '20ch',
  },
}));

export default useStyles;
