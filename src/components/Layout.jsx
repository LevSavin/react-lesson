import {Outlet} from "react-router-dom"
import CustomLink from './CustomLink.jsx';

function Layout() {
  return (
    <div className="layout">
      <header>
        <CustomLink to="/chats">Чаты</CustomLink>
        <CustomLink to="/products">Товары</CustomLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Футер</footer>
    </div>
  );
}

export default Layout;