import { useState } from 'react';
import { User } from '../../interface/User';
import { Grid, Paper, Box, Typography, Avatar, Button, Snackbar } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import AvatarForm from './AvatarForm/AvatarForm';
import useStyles from './useStyles';
import uploadImage from '../../helpers/APICalls/uploadImage';
import deleteAvatar from '../../helpers/APICalls/deleteAvatar';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  loggedInUser: User;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const EditProfilePicture = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const { updateAvatarContext, deleteAvatarContext } = useAuth();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [snackbarMessage, setSnackbarMessage] = useState({ className: '', message: '', open: true });

  function changeHandler(e: HTMLInputEvent) {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      setAvatarFile(file);
    }
  }

  function cancelHandler(): void {
    setAvatarFile(null);
  }

  async function submitHandler() {
    if (!avatarFile) return;
    const formData: FormData = new FormData();
    formData.append('image', avatarFile);
    await uploadImage(formData).then((data) => {
      if (data.error) {
        setSnackbarMessage({ className: classes.error, open: true, message: data.error.message });
      } else if (data.success) {
        setAvatarFile(null);
        updateAvatarContext(data.success);
        setSnackbarMessage({
          className: classes.success,
          open: true,
          message: 'Avatar has been successfully updated!',
        });
      }
    });
  }

  async function deleteHandler() {
    const avatarLink: string = loggedInUser.avatar;

    if (avatarLink) {
      await deleteAvatar().then((data) => {
        if (data.error) {
          setSnackbarMessage({ className: classes.error, open: true, message: 'Avatar failed to be deleted' });
        } else if (data.success) {
          setSnackbarMessage({
            className: classes.success,
            open: true,
            message: 'Avatar has been successfully deleted!',
          });
          deleteAvatarContext();
        }
      });
    }
  }

  function closingSnackbar(): void {
    setSnackbarMessage({ className: '', message: '', open: false });
  }

  function displayAvatar(): JSX.Element {
    return avatarFile ? (
      <>
        <Avatar alt="Profile Image" className={classes.avatar} src={URL.createObjectURL(avatarFile)} />
        <Button variant="contained" color="secondary" onClick={cancelHandler} className={classes.button}>
          Cancel Upload
        </Button>
      </>
    ) : (
      <>
        <AvatarDisplay loggedIn={true} user={loggedInUser} className={classes.avatar} />
        <Grid item xs={12} md={8} className={classes.subheader}>
          Be sure to use a photo that clearly shows your face
        </Grid>
      </>
    );
  }

  function fileOrSubmit(): JSX.Element {
    return avatarFile ? (
      <Button className={classes.button} color="primary" variant="contained" component="label" onClick={submitHandler}>
        Confirm Avatar Upload
      </Button>
    ) : (
      <>
        <AvatarForm changeHandler={changeHandler} />
        <p>
          Supported file extensions:
          <strong>.jpg, .png </strong>
          Maximum file size: <strong>1MB</strong>
        </p>
      </>
    );
  }

  return (
    <Box>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header}> Profile Photo </Typography>
        <div className={classes.picture}>{displayAvatar()}</div>
        {fileOrSubmit()}
        <Button className={classes.button} startIcon={<DeleteIcon />} onClick={deleteHandler}>
          Delete Photo
        </Button>
      </Paper>
      <Snackbar
        ContentProps={{
          classes: {
            root: snackbarMessage.className,
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarMessage.open}
        onClose={closingSnackbar}
        message={snackbarMessage.message}
        key="alert message"
      />
    </Box>
  );
};

export default EditProfilePicture;
