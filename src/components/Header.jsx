import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importamos useLocation para obtener la ruta actual
import '../css/styles.css';

function Header() {
  const location = useLocation(); // Obtenemos la ruta actual

  return (
    <header>
      <nav>
        <Link to="/" className="logo">Digital Evolution S.A</Link>

        {/* Aquí puedes agregar la clase 'toggle' y las listas de menú como en tu estructura */}
        <div className="toggle"></div>

        <ul className="menu">
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Inicio</Link></li>
          <li className={location.pathname === '/proyectos' || location.pathname.startsWith('/proyecto') ? 'active' : ''}>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li className={location.pathname === '/newsletter' ? 'active' : ''}><Link to="/newsletter">Newsletter</Link></li>
          <li className={location.pathname === '/contacto' ? 'active' : ''}><Link to="/contacto">Contacto</Link></li>
        </ul>

        <div className="menu3">
          <a href=""><i className="fa-solid fa-bars"></i></a>
          <div className="submenu">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
