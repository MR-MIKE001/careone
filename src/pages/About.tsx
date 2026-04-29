import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import corridor from '../assets/corrido.webp';

const About = () => {
  return (
    <section className="section">
      <div className="container container-narrow">
        <SectionHeader
          eyebrow="About"
          title="CareOne Services Ltd."
          subtitle="CareOne Services Ltd is a diversified service company committed to delivering innovative solutions across healthcare, technology, consulting, and investment sectors."
          align="center"
        />

        <div className="about-layout">
          <div>
            <h3 className="about-heading">Who we are</h3>
            <p className="body-text">
              CareOne Services Ltd is a multi-sector company delivering high-quality services in healthcare, digital solutions, consulting, and investment opportunities. We combine innovation with professionalism to provide reliable and impactful solutions.
            </p>
          </div>

          <div className="about-image-wrapper">
            <img
              src={corridor}
              alt="Hospital corridor"
              className="about-image"
            />
          </div>
        </div>

        <div className="grid grid-3 about-grid">
          <Card>
            <h3 className="about-card-title">Mission</h3>
            <p className="body-text">
              To deliver high-quality and dependable services that improve lives and support business growth.
            </p>
          </Card>
          <Card>
            <h3 className="about-card-title">Vision</h3>
            <p className="body-text">
              To become a leading multi-service company recognized for excellence and integrity.
            </p>
          </Card>
          <Card>
            <h3 className="about-card-title">Values</h3>
            <ul className="about-values">
              <li>Integrity</li>
              <li>Professionalism</li>
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Customer Satisfaction</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;