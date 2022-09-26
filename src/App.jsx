import './App.css';
import Layout from './components/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import ChatsPage from './pages/ChatsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index path="/" element={<MainPage/>}></Route>
        <Route path="/chats/*" element={<ChatsPage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
