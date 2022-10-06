import { useContext } from 'react';
import {ThemeContext} from '../context';
import {Outlet} from "react-router-dom"
import CustomLink from './CustomLink';

function Layout() {
  const {themes, toggleTheme} = useContext(ThemeContext)
  return (
      <div className="layout" style={{background: themes.background, color: themes.color }}>
        <header>
          <CustomLink to="/">Главная</CustomLink>
          <CustomLink to="/chats">Чаты</CustomLink>
          <CustomLink to="/profile">Профиль</CustomLink>
        </header>
        <button onClick={toggleTheme}>Переключить тему</button>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>Футер</footer>
      </div>
  );
}

export default Layout;