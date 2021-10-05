import { useHistory } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import DogPhoto from '../../Images/Dogs404.png';
import useStyles from './useStyles';

export default function Normal404Page(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={4} className={classes.content}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center">
          <img src={DogPhoto} className={classes.image} />
        </Box>
      </Grid>
      <Grid item xs={10} sm={7} className={classes.content}>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h1" className={classes.header} gutterBottom>
            Oops, there is an issue with that page...
          </Typography>
          <Typography variant="h3" className={classes.subheader} gutterBottom>
            We couldn&apos;t find it. Either the URL was mistyped, the page never existed, or the page simply
            doesn&apos;t exists any more.
          </Typography>
          <Grid item xs={6} className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={() => history.push('/dashboard')}>
              Let&apos;s Go Back To the Dashboard
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
