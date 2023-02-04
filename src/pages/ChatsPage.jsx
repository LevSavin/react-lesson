import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

function ChatsPage() {
  const chats = useSelector(state => state.chatsReducer.chats);
  const messages = useSelector(state => state.messagesReducer.currentMessages);
  const currentChat = useSelector(state => state.messagesReducer.currentChat);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (currentChat === 0) {
      alert("Выберите чат")
      return
    }
    const newMessage = {id: Date.now(), text: text, chatId: currentChat}
    dispatch({ type: 'addMessage', payload: newMessage})
    setText("");
  };

  const deleteMessage = (id) => {
      dispatch({ type: 'deleteMessage', payload: id})
  }

  const selectChat = (id) => {
    dispatch({ type: 'selectMessagesByChat', payload: id})
  }

  const resetSelect = () => {
    dispatch({ type: 'resetSelect'})
  }

  return (
    <div>
        <h1>Чаты</h1>
        <ul>
          <li><button onClick={resetSelect}>Все</button></li>
          {chats.map((chat) => {
              return(
                  <li key={chat.id}>
                      <button onClick={() => selectChat(chat.id)}>{chat.name}</button>
                  </li>
              )
          })}
        </ul>

        <h2>Сообщения</h2>
        <ul>
            {messages.map((message) => {
                return(
                    <li key={message.id}>
                        {message.text}
                        <button onClick={() => deleteMessage(message.id)}>x</button>
                    </li>
                )
            })}
        </ul>

        <input 
            value={text}
            onChange={(event) => {setText(event.target.value)}}
        ></input>

        <button onClick={sendMessage}>
          Отправить
        </button>
    </div>
  );
}

export default ChatsPage;