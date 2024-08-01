import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  paper: {
    padding: theme.spacing(3),
    position: "relative",
    width: "100%",
  },
  textarea: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

interface ChatInputProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  messageForPlaceholder: string;
  showButton?: boolean;
  buttonLabel?: string;
}

const ChatInput = (props: ChatInputProps) => {
  const { state, setState, messageForPlaceholder, showButton, buttonLabel } =
    props;
  const classes = useStyles();
  const [input, setInput] = useState<string>("");

  const handleGenerateOutput = () => {
     setState(input)
  }

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <TextField
          className={classes.textarea}
          variant="outlined"
          multiline
          minRows={10}
          placeholder={messageForPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {Boolean(showButton) && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateOutput}
            disabled={input === ""}
          >
            {buttonLabel ?? "Generate"}
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default ChatInput;
