import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    title: 'Digital Solutions',
    description:
      'IT support, digital transformation, and online business services to help organisations operate efficiently in a connected world.',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    icon: 'screen',
  },
  {
    title: 'Emergency Care Services',
    description:
      'Rapid response, first aid, and medical support coordination designed to improve outcomes in critical situations.',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    icon: 'medical',
  },
  {
    title: 'Hospital Equipment',
    description:
      'Supply, installation, and maintenance of medical equipment tailored to the needs of healthcare facilities.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    icon: 'equipment',
  },
  {
    title: 'Hospital Consulting',
    description:
      'Operational improvement and performance optimization for hospitals and clinics.',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    icon: 'consulting',
  },
  {
    title: 'Medical Training',
    description:
      'Professional healthcare and emergency training programs for clinical and non-clinical teams.',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    icon: 'training',
  },
  {
    title: 'Marketing & Promotion',
    description:
      'Brand growth and digital campaigns to help healthcare and business services reach the right audience.',
    iconBg: 'bg-fuchsia-100',
    iconColor: 'text-fuchsia-600',
    icon: 'marketing',
  },
  {
    title: 'Importation',
    description:
      'Sourcing and delivery of goods and equipment with attention to quality and compliance.',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    icon: 'import',
  },
  {
    title: 'General Contracting',
    description:
      'Project execution and procurement services that support infrastructure and operations.',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    icon: 'contract',
  },
  {
    title: 'Investment Program',
    description:
      'Structured and professionally managed investment plans, including 6-month and 12-month options.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    icon: 'investment',
  },
];

const renderIcon = (type: string) => {
  switch (type) {
    case 'screen':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="4.75"
            y="5.25"
            width="14.5"
            height="9.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 18.75h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'medical':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="5"
            y="4.75"
            width="14"
            height="14.5"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 9v4m0 0H9m3 0h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'equipment':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="6"
            y="5"
            width="12"
            height="8"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 17.5h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'consulting':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="9"
            cy="9"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4.75 15.25A4.25 4.25 0 0 1 9 12h0a4.25 4.25 0 0 1 4.25 4.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 9.25h3M17.5 7.75v3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'training':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 8.75 12 5.5l7 3.25-7 3.25L5 8.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 12v3.5L12 17.75l4.5-2.25V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'marketing':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.5 7.75 15 4.75v10l-9.5 3v-10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.5 7.5v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'import':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.25 8.5 12 4.75l6.75 3.75-6.75 3.75-6.75-3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 13v4.25L12 20l6-2.75V13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'contract':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="6"
            y="4.75"
            width="12"
            height="14.5"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 8.25h6M9 11.25h4M9 14.25h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'investment':
      return (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 16.75 10 12.5l3 2.75 5-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19.25h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

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
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:border-care-primary/40 hover:shadow-md"
            >
              <div
                className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full ${service.iconBg} ${service.iconColor}`}
              >
                {renderIcon(service.icon)}
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                {service.title}
              </h3>
              <p className="text-xs text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Investment plans callout */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
            <svg
              className="h-3.5 w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 16.75 10 12.5l3 2.75 5-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 19.25h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Investment Program</span>
          </div>

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