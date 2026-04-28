import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const About = () => {
  return (
    <section className="section">
      <div className="container container-narrow">
        <SectionHeader
          eyebrow="About"
          title="CareOne Services Ltd."
          subtitle="We partner with hospitals and clinics to design, equip and operate safe, efficient and patient-centered facilities."
          align="center"
        />

        <div className="about-layout">
          <div>
            <h3 className="about-heading">Who we are</h3>
            <p className="body-text">
              CareOne Services Ltd. is a healthcare-focused company providing
              hospital equipment, management consulting, specialized training,
              marketing promotion, importation and general contracting
              services. We bring together technical, clinical and business
              expertise to support modern healthcare providers.
            </p>
          </div>

          <div className="about-image-wrapper">
            <img
              src="https://via.placeholder.com/560x360"
              alt="Hospital corridor"
              className="about-image"
            />
          </div>
        </div>

        <div className="grid grid-3 about-grid">
          <Card>
            <h3 className="about-card-title">Mission</h3>
            <p className="body-text">
              To empower healthcare providers with reliable equipment, expert
              guidance and practical training that enhance patient safety and
              operational performance.
            </p>
          </Card>
          <Card>
            <h3 className="about-card-title">Vision</h3>
            <p className="body-text">
              To be a trusted partner to hospitals and clinics across the
              region, known for integrated solutions and long-term
              relationships.
            </p>
          </Card>
          <Card>
            <h3 className="about-card-title">Values</h3>
            <ul className="about-values">
              <li>Integrity in every engagement</li>
              <li>Reliability and consistency</li>
              <li>Professionalism and expertise</li>
              <li>Patient-centered thinking</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;