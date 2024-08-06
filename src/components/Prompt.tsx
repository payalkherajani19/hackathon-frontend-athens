import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  makeStyles,
  Paper,
  Typography,
  Box,
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

interface PromptProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const Prompt = (props: PromptProps) => {
  const { prompt, setPrompt, setOpenEdit } = props;
  const classes = useStyles();
  const [input, setInput] = useState<string>(props.prompt);

  const handleGenerateOutput = () => {
    // Your logic to generate output from input
    setPrompt(`${input}`);
    setOpenEdit(false)
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Box style={{ marginBottom: '1rem'}}> <Typography variant="h6"><b>Get Started with Perspecto</b></Typography> </Box>
        <TextField
          className={classes.textarea}
          variant="outlined"
          multiline
          minRows={10}
          placeholder="Find me leads in [industry-name], at [location]..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Typography variant="body2">
          This would find company name, reviews, ratings, type of industry,
          address, website, booking link, name of employees.
        </Typography>

        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateOutput}
            disabled={input === ""}
          >
            Generate
          </Button>
        </div>
        {prompt && (
          <>
            <div style={{ marginTop: "20px" }}>
              <strong>Prompt Given:</strong>
              <p>Generated Output for: {prompt}</p>
            </div>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Prompt;
