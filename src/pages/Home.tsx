import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import offer from '../assets/careOneOffer.jpeg';
import logo from '../assets/careonelogo_converted.webp';

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-care-primary/5 via-slate-50 to-care-secondary/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
              CareOne Services Ltd
            </p>
            <h1 className="mb-3 text-3xl font-semibold md:text-4xl">
              Integrated Healthcare, Digital &amp; Investment Solutions
            </h1>
            <p className="mb-5 text-sm text-slate-600">
              Delivering innovation, reliability, and professional excellence across
              healthcare, technology, and business services.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/services">
                <Button>View services</Button>
              </Link>
              <a href={offer} download>
                <Button variant="secondary">Download Offer</Button>
              </a>
            </div>
          </div>

          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
            <img
              src={logo}
              alt="CareOne Services Ltd Offer"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Core Services"
            title="End-to-end support across healthcare, digital and investments"
            subtitle="CareOne Services Ltd offers a broad but focused set of services designed to support individuals, businesses and healthcare institutions."
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              'Digital Solutions',
              'Emergency Care Services',
              'Hospital Equipment Supply',
              'Hospital Management Consulting',
              'Medical Training Programs',
              'Marketing & Promotion',
              'Importation Services',
              'General Contracting',
              'Investment Programs',
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  {item}
                </h3>
                <p className="text-xs text-slate-600">
                  Learn more about how our {item.toLowerCase()} can support your goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Investment Plans"
            title="Structured and transparent investment opportunities"
            subtitle="Professionally managed plans designed to provide predictable returns under clear, transparent terms."
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                6 Months Plan
              </h3>
              <p className="mt-2 text-2xl font-semibold text-care-primary">
                15% Return
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Medium-term investment for clients seeking a balance between
                duration and returns.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                12 Months Plan
              </h3>
              <p className="mt-2 text-2xl font-semibold text-care-primary">
                30% Return
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Long-term plan offering higher returns for clients with extended
                investment horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Trusted partners focused on your growth"
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              'Trusted and Professional Team',
              'Reliable Service Delivery',
              'Transparent Processes',
              'Client-Focused Approach',
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item}</h3>
                <p className="mt-1 text-xs text-slate-600">
                  We are committed to consistent, ethical and client-centred service.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;