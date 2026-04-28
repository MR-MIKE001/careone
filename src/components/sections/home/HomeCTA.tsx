import { Link } from 'react-router-dom';
import Button from '../../ui/Button';


const HomeCTA = () => {
  return (
    <section className="section section-cta">
      <div className="container section-cta-inner">
        <div>
          <h2 className="cta-title">Need a tailored solution for your facility?</h2>
          <p className="cta-subtitle">
            Share your requirements and our team will recommend the right mix
            of equipment, consulting and training.
          </p>
        </div>
        <Link to="/contact">
          <Button>Talk to our team</Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeCTA;