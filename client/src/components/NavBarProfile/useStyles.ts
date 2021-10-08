import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navBarProfile: {
    minWidth: '150px',
    display: 'flex',
    justifyContent: 'center',
  },
  profileLinksContainer: {
    width: 100,
    paddingLeft: 5,
    marginTop: 30,
  },
  profileLink: {
    fontFamily: theme.typography.bolded.fontFamily,
    cursor: 'pointer',
    marginTop: 10,
    textDecoration: 'none',
  },
  routerLinkDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
  basicProfileLink: {
    cursor: 'pointer',
    marginTop: 10,
  },
}));

export default useStyles;
