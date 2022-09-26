import ChatItem from '../components/chat/ChatItem';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CustomLink from '../components/CustomLink.jsx';
import {Routes, Route} from "react-router-dom"
import NotFoundPage from './NotFoundPage.jsx';

function ChatsPage(props) {
  const [chatList] = useState([{id: 0, name: "Работа", code: "work"}, {id: 1, name: "Мемчики", code: "mems"}]);
  const [selectedIndex, setSelectedIndex] = useState(1);
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        sx={{
          mr: 5, width: '100%', maxWidth: 180
        }}
      >
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <List component="nav">
            {chatList.map((chat) => {
              return(
                <CustomLink to={'/chats/' + chat.code} key={chat.id}>
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
      </Box>
      <Routes>
        {chatList.map((chat) => {
          return(
            <>
              <Route path={'/' + chat.code} element={<ChatItem code={chat.code} key={chat.id}/>}></Route>
            </>
          )
        })}
        <Route path="/" element={null} key="/"></Route>
        <Route path="*" element={<NotFoundPage/>} key="*"></Route>
      </Routes>
    </Box>
  );
}

export default ChatsPage;
