import './App.css';
import LessonOne from './LessonOne.js';
import ChatMain from './chat/ChatMain.js';

function App() {
  return (
    <div className="App">
      <LessonOne label="Props и компоненты"></LessonOne>
      <ChatMain></ChatMain>
    </div>
  );
}

export default App;
