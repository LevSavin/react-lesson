import './App.css';
import Layout from './components/Layout.jsx';
import ChatsPage from './pages/ChatsPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/chats" element={<ChatsPage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;