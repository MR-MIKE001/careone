import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    title: 'Digital Solutions',
    description:
      'IT support, digital transformation, and online business services to help organisations operate efficiently in a connected world.',
  },
  {
    title: 'Emergency Care Services',
    description:
      'Rapid response, first aid, and medical support coordination designed to improve outcomes in critical situations.',
  },
  {
    title: 'Hospital Equipment',
    description:
      'Supply, installation, and maintenance of medical equipment tailored to the needs of healthcare facilities.',
  },
  {
    title: 'Hospital Consulting',
    description:
      'Operational improvement and performance optimization for hospitals and clinics.',
  },
  {
    title: 'Medical Training',
    description:
      'Professional healthcare and emergency training programs for clinical and non-clinical teams.',
  },
  {
    title: 'Marketing & Promotion',
    description:
      'Brand growth and digital campaigns to help healthcare and business services reach the right audience.',
  },
  {
    title: 'Importation',
    description:
      'Sourcing and delivery of goods and equipment with attention to quality and compliance.',
  },
  {
    title: 'General Contracting',
    description:
      'Project execution and procurement services that support infrastructure and operations.',
  },
  {
    title: 'Investment Program',
    description:
      'Structured and professionally managed investment plans, including 6-month and 12-month options.',
  },
];

const Services = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Services"
          title="Comprehensive services for healthcare, technology and investment"
          subtitle="Our services are designed to work together or independently, depending on your needs."
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
            >
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-xs text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Investment plans callout */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Investment Program Plans
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            CareOne Services Ltd offers structured and professionally managed
            investment plans:
          </p>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700">
            <li>6 Months — 15% Return</li>
            <li>12 Months — 30% Return</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;