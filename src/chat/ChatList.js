import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const initChatList = () => ([{id: 0, name: "Работа"}, {id: 1, name: "Мемчики"}]);

function Chat(props) {
  const [chatList, setChatList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    setChatList(initChatList())
  }, []);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List component="nav">
        {chatList.map((chat) => {
          return(
            <ListItemButton
              key={chat.id}
              selected={selectedIndex === chat.id}
              onClick={(event) => handleListItemClick(event, chat.id)}
            >
              <ListItemText primary={chat.name} />
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  );
}

export default Chat;
