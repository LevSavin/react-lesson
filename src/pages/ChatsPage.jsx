import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CustomLink from '../components/CustomLink.jsx';

function ChatsPage(props) {
  const [chats] = useState([{id: 1, name: "Сергей"}, {id: 2, name: "Андрей"}]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
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
            {chats.map((chat) => {
              return(
                <CustomLink to={`/messages/${chat.id}`} key={chat.id}>
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
    </Box>
  );
}

export default ChatsPage;
