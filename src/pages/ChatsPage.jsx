import ChatItem from '../components/chat/ChatItem.jsx';
import ChatList from '../components/chat/ChatList.jsx';
import Box from '@mui/material/Box';
import {Routes, Route} from "react-router-dom"

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
        <Routes>
          <Route path=":code" element={<ChatItem/>}></Route>
        </Routes>
      </Box>
  );
}

export default Chat;
