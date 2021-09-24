import useStyles from './useStyles';
import { Formik, FormikHelpers } from 'formik';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function DemoLogin({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

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
