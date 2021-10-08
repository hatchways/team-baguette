import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 40,
    marginRight: 40,
  },
  headerBar: {
    height: 90,
    marginBottom: 35,
    boxShadow: '0 2px 5px 0 gray',
  },
  headerName: {
    marginLeft: 25,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  headerAvatar: {
    marginRight: 10,
  },
  ellipsis: {
    marginRight: 15,
  },
  message: {
    backgroundColor: 'silver',
    borderRadius: '10px 10px 0 10px',
    maxWidth: '75%',
    marginTop: 10,
  },
  otherMessage: {
    backgroundColor: 'Gainsboro',
    borderRadius: '10px 10px 0 10px',
    maxWidth: '75%',
    marginTop: 10,
  },
  messageText: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    overflowWrap: 'break-word',
    whiteSpace: 'break-spaces',
  },
  otherAvatar: {
    marginRight: 10,
    marginTop: 5,
  },
  inputContainer: {
    height: 90,
    marginTop: 20,
    marginBottom: 35,
    boxShadow: '0 2px 5px 0 gray',
  },
  inputForm: {
    marginTop: 10,
    width: "40ch",
  },
  input: {
    height: '100%',
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
}));

export default useStyles;
