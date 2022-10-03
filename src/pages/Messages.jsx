import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Messages() {
  const { id } = useParams();
  const [messages, setMessages] = useState([
    {
      id: 0,
      text: "text 0",
      chatId: 2,
    },
    {
      id: 1,
      text: "text 1",
      chatId: 1,
    },
    {
      id: 2,
      text: "text 2",
      chatId: 2,
    }
  ])

  useEffect(() => {
    const filter = messages.filter((message) => message.chatId === +id);
    setMessages(filter)
  }, []);

  return (
    <div>
      {messages.map((message) => {
        return(
          <div key={message.id}>{message.text}</div>
        )
      })}
    </div>
  );
}

export default Messages;