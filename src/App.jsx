import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Messages from './pages/Messages';
import {Routes, Route} from "react-router-dom"
import {themes, ThemeContext} from './context';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<MainPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/chats" element={<ChatsPage/>}></Route>
          <Route path="/messages/:id" element={<Messages/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
