import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../constants/constants';
import './navbar.css';
import { LanguageContext } from '../../context/context';
import { useContext } from 'react';
import { useEffect } from 'react';

const Navbar = ({ onAbrilModal }) => {
  const { empresa } = useContext(LanguageContext);
  const { configuracionData = {} } = useContext(LanguageContext);
  const { setFiltroInicial } = useContext(LanguageContext);
  useEffect(() => {}, [empresa]);

  const handleClick = (label) => {
    if (label === 'Contactanos') {
      onAbrilModal();
    }
    const navCollapse = document.getElementById('navbarNavDropdown');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navCollapse, { toggle: false });
      bsCollapse.hide();
    }
    localStorage.setItem('producto', '');
  };
  const url_logo = '/images/logoSabanamotos.png';
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav__menu fixed-top" style={{ backgroundColor: 'black' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/">
          <img src={url_logo} alt="" className="me-2 logo_menu" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto navbar-nav__menu__principal">
            {navItems.map((item, index) =>
              item.submenu ? (
                <li className="nav-item dropdown" key={index}>
                  <a
                    className="nav-link dropdown-toggle stylish-dropdown-toggle"
                    href="#"
                    id={`dropdown-${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu custom-dropdown" aria-labelledby={`dropdown-${index}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          className="dropdown-item custom-dropdown-item"
                          to="/"
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick(subItem);
                            localStorage.setItem('producto', '');
                            const filtro = subItem.toUpperCase();
                            setFiltroInicial(filtro);

                            window.history.pushState({}, '', '/');

                            setTimeout(() => {
                              const catalogo = document.getElementById('catalogo-motos');
                              if (catalogo) {
                                const yOffset = -160; // altura del navbar
                                const y = catalogo.getBoundingClientRect().top + window.pageYOffset + yOffset;

                                window.scrollTo({ top: y, behavior: 'smooth' });
                              }
                            }, 400);
                          }}
                        >
                          {subItem}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.ruta ? `/${item.ruta}` : '#'}
                    className="nav-link stylish-nav-link"
                    onClick={() => handleClick(item.label)}
                    activeclassname="active"
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
