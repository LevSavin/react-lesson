import { useState, useEffect } from 'react';

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
    const newMessageList = [...messageList, currentMessage];
    setMessageList(newMessageList);
    setCurrentMessage(initCurrentMessage());
  };

  const sendBotMessage = (lastMessage) => {
    const newBotMessage = {id: nextId, author: "admin", text: `${lastMessage.author} cпасибо за ваше сообщение`};
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
    console.log(nextId)
    setnextId(nextId + 1);
    setTimeout(() => {
      sendBotMessage(lastMessage)
    }, 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  return (
    <div>
      <p>Урок 2</p>
      <p className="lesson__label messages">{ props.label }</p>

      <div className='messages__form'>
        <input
          value={currentMessage.author}
          onChange={(event) => {setNewMessage('author', event.target.value)}}
          placeholder='Автор'
          className='messages__form-item'
        ></input>
        <textarea
          value={currentMessage.text}
          onChange={(event) => {setNewMessage('text', event.target.value)}}
          placeholder='Текст'
          rows={3}
          className='messages__form-item'
        ></textarea>
        <button
          onClick={sendMessage}
          className='messages__form-item'
        >Отправить</button>
      </div>

      <div className="messages__list">
        {messageList.map((message) => (
          <div className="message__item" key={message.id}>
            <p>{message.author}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonTwo;
