import Card from "../../ui/Card";
import SectionHeader from "../../ui/SectionHeader";

const points = [
  {
    title: 'Healthcare focused',
    text: 'We work exclusively with healthcare providers, understanding the realities of clinical environments.',
  },
  {
    title: 'Quality and compliance',
    text: 'Our recommendations and equipment are aligned with industry standards and regulatory requirements.',
  },
  {
    title: 'End-to-end support',
    text: 'From planning and importation to training and promotion, we support your team at every stage.',
  },
];

const WhyChoose = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Why CareOne"
          title="A partner focused on your patients and your operations"
        />

        <div className="grid grid-3">
          {points.map((item) => (
            <Card key={item.title}>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-description">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;