import React, { useState } from 'react';
import { Container, Paper, Box, Typography, makeStyles, TextField, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Layout from '../components/Layout';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // height: '80vh',
  },
  header: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  chatWindow: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: theme.spacing(2),
    // backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    marginBottom: theme.spacing(2),
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    position: 'fixed',
    bottom: 0,
    width: '50%',
    alignSelf: 'center',
  },
  input: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const App: React.FC = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `Bot response to "${input}"`, sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <Layout>
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.header}>Talk to ChatGPT</Typography>
      <Box className={classes.chatWindow}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemText
                primary={message.sender === 'user' ? 'You' : 'Bot'}
                secondary={message.text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <div className={classes.inputArea}>
        <TextField
          className={classes.input}
          variant="outlined"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </Container>
    </Layout>
  );
};

export default App;
