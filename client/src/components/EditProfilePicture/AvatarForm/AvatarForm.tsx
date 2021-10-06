import Button from '@material-ui/core/Button';
import useStyles from '../useStyles';

export default function AvatarForm({ changeHandler }: any): JSX.Element {
  const classes = useStyles();

  return (
    <form encType="multipart/form-data">
      <Button className={classes.button} color="secondary" variant="outlined" component="label">
        Upload a file from your device
        <input hidden type="file" onChange={changeHandler} accept="image/png, image/gif, image/jpeg" name="avatar" />
      </Button>
    </form>
  );
}
