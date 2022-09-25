import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CustomLink from '../CustomLink.jsx';

function Chat(props) {
  const [chatList] = useState([{id: 0, name: "Работа", code: "work"}, {id: 1, name: "Мемчики", code: "mems"}]);
  const [selectedIndex, setSelectedIndex] = useState(1);
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List component="nav">
        {chatList.map((chat) => {
          return(
            <CustomLink to={chat.code} key={chat.id}>
              <ListItemButton
                selected={selectedIndex === chat.id}
                onClick={(event) => handleListItemClick(event, chat.id)}
              >
                <ListItemText primary={chat.name} />
              </ListItemButton>
            </CustomLink>
          )
        })}
      </List>
    </Box>
  );
}

export default Chat;
