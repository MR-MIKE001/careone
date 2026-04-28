// src/components/layout/Navbar.tsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-logo">
          <span className="logo-mark">C</span>
          <div className="logo-text">
            <span className="logo-title">CareOne Services Ltd.</span>
            <span className="logo-subtitle">Integrated hospital solutions</span>
          </div>
        </div>

        <nav className="navbar-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' nav-link-active' : '')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' nav-link-active' : '')
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' nav-link-active' : '')
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' nav-link-active' : '')
            }
          >
            Contact
          </NavLink>
        </nav>

        <NavLink to="/contact" className="btn btn-primary btn-nav">
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;