import { Box, Typography, FormControl, FilledInput, Button } from '@material-ui/core';
import useStyles from './useStyles';
import { useState } from 'react';

export default function InputBar(): JSX.Element {
  const [inputText, setInputText] = useState<string>();
  const classes = useStyles();

  const changeHandler = (e: any) => {
    e.preventDefault();
    if (e.target) {
      setInputText(e.target.value);
    }
  };

  const submitHandler = (e: any) => {
    //   TODO get this to server thru ajax, creating a new message and pushing the new message to the list of messages inside ActiveConversation
    e.preventDefault();
    setInputText('');
  };
  return (
    <Box className={classes.inputContainer} display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" justifyContent="center"  className={classes.headerName}>
        <form className={classes.inputForm} onSubmit={submitHandler} >
          <FormControl fullWidth hiddenLabel>
            <FilledInput
              classes={{ root: classes.input }}
              disableUnderline
              placeholder="Type something..."
              value={inputText}
              name="text"
              onChange={changeHandler}
            />
          </FormControl>
        </form>
      </Box>
      <Button variant="contained" color="secondary" style={{height: "100%", width: "10em"}}> Send</Button>
    </Box>
  );
}
