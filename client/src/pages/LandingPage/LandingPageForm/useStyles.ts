import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  landingFormContainer: {
    width: '80%',
    margin: '0 auto',
  },
  landingFormTitle: {
    fontSize: 30,
    fontFamily: theme.typography.bolded.fontFamily,
  },
  landingWhere: {
    margin: '25px 10px 10px 10px',
  },
  landingWhereField: {
    width: '90%',
  },
  landingWhen: {
    margin: '25px 10px 10px 10px',
  },
  landingWhenField: {
    width: '45%',
  },
  inputLabels: {
    fontFamily: theme.typography.bolded.fontFamily,
    color: 'black',
    margin: '5px 0',
  },
  buttonContainer: {
    marginTop: 25,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  findButton: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: theme.palette.primary.main,
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    fontFamily: theme.typography.bolded.fontFamily,
    boxShadow: 'none',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'rgba(255, 255, 255, 1)',
    },
  },
}));

export default useStyles;
