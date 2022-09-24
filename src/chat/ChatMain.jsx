import ChatItem from './ChatItem.jsx';
import ChatList from './ChatList.jsx';
import Box from '@mui/material/Box';

function Chat(props) {
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
          <ChatList></ChatList>
        </Box>
        <ChatItem></ChatItem>
      </Box>
  );
}

export default Chat;
