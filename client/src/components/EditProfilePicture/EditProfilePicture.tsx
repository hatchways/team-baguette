import { useState } from 'react';
import { User } from '../../interface/User';
import { Grid, Paper, Box, Typography, Avatar, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import AvatarForm from './AvatarForm/AvatarForm';
import useStyles from './useStyles';
import uploadImage from '../../helpers/APICalls/uploadImage';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  loggedInUser: User;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const EditProfilePicture = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const [avatarFile, setAvatarFile] = useState<File | undefined>(undefined);

  function changeHandler(e: HTMLInputEvent) {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    setAvatarFile(file);
  }

  async function submitHandler() {
    if (!avatarFile) return;
    const formData: FormData = new FormData();
    formData.append('image', avatarFile);
    // console.log(await uploadImage(formData));
    await uploadImage(formData).then((data) => {
      if (data.error) {
        alert(data.error.message);
      } else if (data.success) {
        setAvatarFile(undefined);
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });
      }
    });
  }

  function displayAvatar(): JSX.Element {
    return avatarFile ? (
      <>
        <Avatar alt="Profile Image" className={classes.avatar} src={URL.createObjectURL(avatarFile)} />
        <Button variant="contained" color="secondary" onClick={() => setAvatarFile(undefined)}>
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
        {/* <Grid item xs={12} md={8}> */}
        <p>
          Supported file extensions:
          {/* <br /> */}
          <strong>.jpg, .png </strong>
          {/* <br /> */}
          Maximum file size: <strong>1MB</strong>
        </p>
        {/* </Grid> */}
      </>
    );
  }

  return (
    <Box>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header}> Profile Photo </Typography>
        <div className={classes.picture}>{displayAvatar()}</div>
        {fileOrSubmit()}
        <Button className={classes.button} startIcon={<DeleteIcon />}>
          Delete Photo
        </Button>
      </Paper>
    </Box>
  );
};

export default EditProfilePicture;
