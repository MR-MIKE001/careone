// src/sections/home/Hero.tsx
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import logo from '../../../assets/careonelogo_converted.webp';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">CareOne Services Ltd.</p>
          <h1 className="hero-title">
            Integrated hospital solutions for safer, smarter care.
          </h1>
          <p className="hero-subtitle">
            We support hospitals and clinics with trusted equipment, management
            consulting, specialized training, marketing promotion, importation,
            and general contracting.
          </p>

          <div className="hero-actions">
            <Link to="/contact">
              <Button>Schedule a consultation</Button>
            </Link>
            <Link to="/services" className="hero-secondary-link">
              View all services
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={logo}
            alt="Healthcare professionals in a modern hospital"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;