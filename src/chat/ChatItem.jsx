import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const initCurrentMessage = () => ({id: null, author: "", text: ""});

function LessonTwo(props) {
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(initCurrentMessage());
  const [nextId, setnextId] = useState(0);
  
  const setNewMessage = (key, value) => {
    const newCurrentMessage = {id: nextId};
    newCurrentMessage[key] = value;
    setCurrentMessage({
      ...currentMessage,
      ...newCurrentMessage,
    })
  };

  const sendMessage = () => {
    if (currentMessage.author === "admin") {
      alert("ник admin зарезервирован")
      return;
    }
    setMessageList(prevState => [...prevState, currentMessage]);
    setCurrentMessage(initCurrentMessage());
  };

  const sendBotMessage = (lastMessage) => {
    const newBotMessage = {id: nextId + 'response', author: "admin", text: `${lastMessage.author} cпасибо за ваше сообщение`};
    const newMessageList = [...messageList, newBotMessage];
    setMessageList(newMessageList);
    setnextId(nextId + 1);
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1]
    if (!lastMessage) {
      return;
    }
    if (lastMessage.author === "admin") {
      return;
    }
    setnextId(nextId + 1);
    setTimeout(() => {
      sendBotMessage(lastMessage)
    }, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  return (
    <div>
      <Box
        component="form"
        sx={{
          width: 500, maxWidth: '100%', mb: 5,
          '& .MuiTextField-root': { mb: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          fullWidth
          value={currentMessage.author}
          onChange={(event) => {setNewMessage('author', event.target.value)}}
          required
          id="outlined-required"
          label="Автор"
        />
        <TextField
          fullWidth
          value={currentMessage.text}
          onChange={(event) => {setNewMessage('text', event.target.value)}}
          required
          id="outlined-multiline-flexible"
          label="Текст"
          multiline
          maxRows={4}
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage}>
          Отправить
        </Button>
      </Box>

      <Box
        sx={{
          width: 500, maxWidth: '100%'
        }}
      >
        {messageList.map((message) => {
          return(
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                  {message.author}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  {message.text}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </Box>
    </div>
  );
}

export default LessonTwo;
