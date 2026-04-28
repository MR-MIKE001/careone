import Card from "../../ui/Card";
import SectionHeader from "../../ui/SectionHeader";


const services = [
  {
    title: 'Hospital Equipment',
    description:
      'Sourcing, installation and maintenance of reliable hospital equipment tailored to your facility needs.',
  },
  {
    title: 'Hospital Management Consultants',
    description:
      'Expert guidance to improve workflows, efficiency and regulatory compliance in your hospital.',
  },
  {
    title: 'Specialized Medical Care Training',
    description:
      'Hands-on training for clinical teams on equipment usage, patient safety and best practices.',
  },
  {
    title: 'Marketing Promotion',
    description:
      'Strategic marketing support to promote your healthcare services and reach the right patients.',
  },
  {
    title: 'Importation',
    description:
      'End-to-end importation of medical equipment and supplies with full documentation support.',
  },
  {
    title: 'General Contractor',
    description:
      'Project management and contracting for hospital build-outs, renovation and infrastructure.',
  },
];

const ServicesOverview = () => {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Integrated support across your hospital operations"
          subtitle="CareOne Services Ltd. provides a complete set of services to help you plan, equip and run your healthcare facility with confidence."
          align="center"
        />

        <div className="grid grid-3">
          {services.map((service) => (
            <Card key={service.title}>
              <div className="service-card-icon">
                <span className="service-card-icon-mark">✓</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;