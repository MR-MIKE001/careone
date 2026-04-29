// src/components/layout/Footer.tsx
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-mark logo-mark-sm">C</span>
            <span className="footer-brand-name">CareOne Services Ltd.</span>
          </div>
          <p className="footer-text">
            Delivering trusted hospital equipment, consulting and training to
            healthcare providers.
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Navigation</span>
          <NavLink to="/" className="footer-link">
            Home
          </NavLink>
          <NavLink to="/about" className="footer-link">
            About
          </NavLink>
          <NavLink to="/services" className="footer-link">
            Services
          </NavLink>
          <NavLink to="/contact" className="footer-link">
            Contact
          </NavLink>
        </div>

        <div className="footer-contact">
          <span className="footer-heading">Contact</span>
          <p className="footer-text">Phone: <a href="tel:+2349057561432" className="footer-link">+2349057561432</a></p>
          <p className="footer-text">Address: Plot 500 East West Road, Beside Lockdown Bar, Port Harcourt, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-bottom-text">
            © {new Date().getFullYear()} CareOne Services Ltd. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;