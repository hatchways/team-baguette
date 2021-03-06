import { useState } from 'react';
import { User } from '../../interface/User';
import { Grid, Paper, Box, Typography, Avatar, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import AvatarForm from './AvatarForm/AvatarForm';
import useStyles from './useStyles';
import uploadImage from '../../helpers/APICalls/uploadImage';
import deleteAvatar from '../../helpers/APICalls/deleteAvatar';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

interface Props {
  loggedInUser: User;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const EditProfilePicture = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const { updateAvatarContext, deleteAvatarContext } = useAuth();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

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
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        setAvatarFile(null);
        updateAvatarContext(data.success);
        updateSnackBarMessage('Avatar has been successfully updated!');
      }
    });
  }

  async function deleteHandler() {
    const avatarLink: string = loggedInUser.avatar;

    if (avatarLink) {
      await deleteAvatar().then((data) => {
        if (data.error) {
          updateSnackBarMessage('Avatar failed to be deleted');
        } else if (data.success) {
          updateSnackBarMessage('Avatar has been successfully deleted!');
          deleteAvatarContext();
        }
      });
    }
  }

  function displayAvatar(): JSX.Element {
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.picture}
        >
          {avatarFile ? (
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
          )}
        </Box>
        {avatarFile ? (
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            component="label"
            onClick={submitHandler}
          >
            Confirm Avatar Upload
          </Button>
        ) : (
          <>
            <AvatarForm changeHandler={changeHandler} />
            <Typography component="p" variant="body1" align="center">
              Supported file extensions: <strong>.jpg, .png </strong>
              <br />
              Maximum file size: <strong>1MB</strong>
            </Typography>
          </>
        )}
      </>
    );
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h3" align="center" className={classes.header}>
          Profile Photo
        </Typography>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          {displayAvatar()}

          <Button className={classes.button} startIcon={<Delete />} onClick={deleteHandler}>
            Delete Photo
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditProfilePicture;
