// src/sections/home/Hero.tsx
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import logo from '../../../assets/careonelogo_converted.webp';
import offer from '../../../assets/careOneOffer.jpeg';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">CareOne Services Ltd.</p>
          <h1 className="hero-title">
           Integrated Healthcare, Digital & Investment Solutions
          </h1>
          <p className="hero-subtitle">
            Delivering innovation, reliability, and professional excellence across healthcare, technology, and business services.
          </p>

          <div className="hero-actions">
            <a href={offer} download>
              <Button>Download Offer</Button>
            </a>
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