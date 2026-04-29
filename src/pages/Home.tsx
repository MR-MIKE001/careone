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
              alt="CareOne Services Ltd"
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

      {/* Channel Partner Section */}
      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Channel Partner"
            title="Official Regional Channel Partner of SWAD Digital Solutions Ltd."
            subtitle="We are authorized to represent SWAD Digital Solutions Ltd across a range of powerful digital solutions for modern businesses."
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">HotelGo</h3>
              <p className="text-xs text-slate-600">
                Hotel PMS solution helping hotel owners manage their business effectively,
                reduce theft, increase profitability, and grow.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">SWAD Cloud</h3>
              <p className="text-xs text-slate-600">
                Cloud hosting and digital tools marketplace that brings businesses online
                and connects them to the world.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">Aria Messenger</h3>
              <p className="text-xs text-slate-600">
                Marketing solution for businesses to send and manage campaigns across email,
                SMS, WhatsApp, and push notifications.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">NetCaller</h3>
              <p className="text-xs text-slate-600">
                Mobile‑first cloud communication system that enables businesses to operate
                a professional phone and messaging infrastructure without owning telecom hardware.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                Custom Product Development
              </h3>
              <p className="text-xs text-slate-600">
                Designing and developing bespoke digital solutions tailored to your business needs.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">Managed IT Services</h3>
              <p className="text-xs text-slate-600">
                Full IT management so your business can focus on its core operations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm md:col-span-2 lg:col-span-3">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">Cybersecurity</h3>
              <p className="text-xs text-slate-600">
                End‑to‑end digital security, from device management to disaster recovery,
                identity management to access control.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 text-center text-sm">
            <p className="max-w-2xl text-slate-700">
              If you&apos;re interested in any of these solutions, talk to us now.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.swaddigitalsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-care-primary underline underline-offset-2"
              >
                Learn more about SWAD Digital Solutions Ltd
              </a>
              <a
                href="https://wa.me/+2348066673312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Talk to us on WhatsApp</Button>
              </a>
            </div>
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