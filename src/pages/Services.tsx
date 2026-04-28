import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const services = [
  {
    title: 'Hospital Equipment',
    description:
      'We help you select, source and maintain equipment that supports safe, effective clinical care.',
    bullets: [
      'Diagnostic and monitoring equipment',
      'Theatre and critical care equipment',
      'Installation, calibration and maintenance coordination',
    ],
  },
  {
    title: 'Hospital Management Consultants',
    description:
      'Our consultants work with your leadership team to optimise operations and governance.',
    bullets: [
      'Operational assessments and workflow mapping',
      'Performance and cost optimisation plans',
      'Implementation support and change management',
    ],
  },
  {
    title: 'Specialized Medical Care Training',
    description:
      'We deliver practical training programmes designed around your teams and equipment.',
    bullets: [
      'Equipment handling and safety',
      'Infection prevention and control',
      'Emergency and critical care protocols',
    ],
  },
  {
    title: 'Marketing Promotion',
    description:
      'We help communicate your services clearly to patients, referrers and partners.',
    bullets: [
      'Brand and message development',
      'Digital and offline campaign planning',
      'Patient education material support',
    ],
  },
  {
    title: 'Importation',
    description:
      'We manage the complexities of importing medical equipment and supplies.',
    bullets: [
      'Vendor and product sourcing',
      'Regulatory and documentation support',
      'Logistics coordination to your facility',
    ],
  },
  {
    title: 'General Contractor',
    description:
      'We coordinate projects that support your facility infrastructure and upgrades.',
    bullets: [
      'Facility build-outs and renovations',
      'Project planning and coordination',
      'Vendor and contractor management',
    ],
  },
];

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Specialised support for healthcare providers"
          subtitle="Choose a single service or combine multiple offerings for an integrated solution."
          align="center"
        />

        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-detail ${
                index % 2 === 1 ? 'service-detail-alt' : ''
              }`}
            >
              <div className="service-detail-content">
                <h3 className="service-detail-title">{service.title}</h3>
                <p className="service-detail-description">
                  {service.description}
                </p>
                <ul className="service-detail-bullets">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Card>
                <p className="service-detail-cta">
                  Ready to explore {service.title.toLowerCase()} for your
                  facility?
                </p>
                <a href="/contact" className="service-detail-cta-link">
                  Talk to our team →
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;