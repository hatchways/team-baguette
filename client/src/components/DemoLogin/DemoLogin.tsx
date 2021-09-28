import useStyles from './useStyles';
import { Formik, FormikHelpers } from 'formik';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import login from '../../helpers/APICalls/login';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useAuth } from '../../context/useAuthContext';

export default function DemoLogin(): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const { updateLoginContext } = useAuth();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: `${process.env.REACT_APP_DEMO_USER}`,
          password: `${process.env.REACT_APP_DEMO_PW}`,
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Box textAlign="center">
              <Button type="submit" size="large" variant="contained" color="secondary" className={classes.demoSubmit}>
                {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Demo'}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}
