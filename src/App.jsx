import './App.css';
import LessonOne from './LessonOne.jsx';
import ChatMain from './chat/ChatMain.jsx';

function App() {
  return (
    <div className="App">
      <LessonOne label="Props и компоненты"></LessonOne>
      <ChatMain></ChatMain>
    </div>
  );
}

export default App;
