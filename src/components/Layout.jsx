import {Outlet} from "react-router-dom"
import CustomLink from './CustomLink.jsx';

function Layout() {
  return (
    <div className="layout">
      <header>
        <CustomLink to="/">Главная</CustomLink>
        <CustomLink to="/chats">Чаты</CustomLink>
        <CustomLink to="/profile">Профиль</CustomLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Футер</footer>
    </div>
  );
}

export default Layout;