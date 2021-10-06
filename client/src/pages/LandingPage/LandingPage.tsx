import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import LandingPageForm from './LandingPageForm/LandingPageForm';

export default function LandingPage(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid className={classes.landingContainer} container>
      <Grid item className={classes.leftBox} xs={6}>
        <Box className={classes.fauxHeaderLeft}>
          <PetsIcon className={classes.pawIcon} />
          <Typography className={classes.navTitle}>LovingSitter.</Typography>
        </Box>
        <LandingPageForm />
      </Grid>
      <Grid item className={classes.rightBox} xs={6}>
        <Box className={classes.fauxHeaderRight}>
          <Typography className={classes.becomeSitter}>Become a sitter</Typography>
          <Button href="/login" size="large" variant="contained" className={classes.login}>
            Login
          </Button>
          <Button href="/signup" size="large" variant="contained" color="secondary" className={classes.signUp}>
            Sign up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
