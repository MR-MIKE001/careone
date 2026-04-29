import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import offer from '../assets/careOneOffer.jpeg';
import logo from '../assets/careonelogo_converted.webp';

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-care-primary/5 via-slate-50 to-care-secondary/10 py-14">
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
            {/* Small stats row */}
            <div className="mt-4 flex flex-wrap gap-5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-care-primary/10 text-[0.7rem] text-care-primary">
                  HC
                </span>
                <span>Healthcare &amp; emergency services</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-care-secondary/10 text-[0.7rem] text-care-primary">
                  IT
                </span>
                <span>Digital &amp; IT solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[0.7rem] text-emerald-700">
                  %
                </span>
                <span>Structured investments</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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
              {
                label: 'Digital Solutions',
                iconBg: 'bg-sky-100',
                iconColor: 'text-sky-600',
              },
              {
                label: 'Emergency Care Services',
                iconBg: 'bg-red-100',
                iconColor: 'text-red-600',
              },
              {
                label: 'Hospital Equipment Supply',
                iconBg: 'bg-emerald-100',
                iconColor: 'text-emerald-600',
              },
              {
                label: 'Hospital Management Consulting',
                iconBg: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
              },
              {
                label: 'Medical Training Programs',
                iconBg: 'bg-amber-100',
                iconColor: 'text-amber-600',
              },
              {
                label: 'Marketing & Promotion',
                iconBg: 'bg-fuchsia-100',
                iconColor: 'text-fuchsia-600',
              },
              {
                label: 'Importation Services',
                iconBg: 'bg-slate-100',
                iconColor: 'text-slate-600',
              },
              {
                label: 'General Contracting',
                iconBg: 'bg-teal-100',
                iconColor: 'text-teal-600',
              },
              {
                label: 'Investment Programs',
                iconBg: 'bg-emerald-100',
                iconColor: 'text-emerald-700',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:border-care-primary/40 hover:shadow-md"
              >
                <div
                  className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor} text-xs`}
                >
                  {/* Generic feature icon */}
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.75 7.5h10.5M6.75 12h5.5M6.75 16.5h3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-600">
                  Learn more about how our {item.label.toLowerCase()} can support your goals.
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
            {/* HotelGo */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                {/* Building icon */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 4.75h6.5v14.5H5.75V7A2.25 2.25 0 0 1 7 4.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.5 9.75h2.75a1 1 0 0 1 1 1V19.5H15.5V9.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.75 8.75h2M8.75 11.75h2M8.75 14.75h2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                HotelGo
              </h3>
              <p className="text-xs text-slate-600">
                Hotel PMS solution helping hotel owners manage their business effectively,
                reduce theft, increase profitability, and grow.
              </p>
            </div>

            {/* SWAD Cloud */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                {/* Cloud icon */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.5 17.25h8.25A3.25 3.25 0 0 0 18.75 14c0-1.8-1.43-3.25-3.25-3.25a3.4 3.4 0 0 0-.82.1A3.75 3.75 0 0 0 7.5 9.75 3.75 3.75 0 0 0 7.2 17.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                SWAD Cloud
              </h3>
              <p className="text-xs text-slate-600">
                Cloud hosting and digital tools marketplace that brings businesses online
                and connects them to the world.
              </p>
            </div>

            {/* Aria Messenger */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600">
                {/* Chat bubbles */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.5 15.25 5 17l.5-2.75A4.75 4.75 0 0 1 10.2 9.5h2.05A4.75 4.75 0 0 1 17 14.25V15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8.25A4.25 4.25 0 0 1 12.25 4h1.25a4.5 4.5 0 0 1 4.5 4.5 4.5 4.5 0 0 1-3.34 4.33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                Aria Messenger
              </h3>
              <p className="text-xs text-slate-600">
                Marketing solution for businesses to send and manage campaigns across email,
                SMS, WhatsApp, and push notifications.
              </p>
            </div>

            {/* NetCaller */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                {/* Phone icon */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.25 5.75 8 4.5 5.75 6.75c.4 2.4 1.8 4.7 3.8 6.7 2 2 4.3 3.4 6.7 3.8l2.25-2.25-1.25-1.25M14.5 5.25 16.75 3m-2.25 4.5L17 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                NetCaller
              </h3>
              <p className="text-xs text-slate-600">
                Mobile‑first cloud communication system that enables businesses to operate
                a professional phone and messaging infrastructure without owning telecom hardware.
              </p>
            </div>

            {/* Custom Product Development */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                {/* User / custom icon */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.75 18.25A4.25 4.25 0 0 1 12 14h0a4.25 4.25 0 0 1 4.25 4.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                Custom Product Development
              </h3>
              <p className="text-xs text-slate-600">
                Designing and developing bespoke digital solutions tailored to your business needs.
              </p>
            </div>

            {/* Managed IT Services */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                {/* Cog icon */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.5 4.75 9 6.5M15.5 4.75 15 6.5M6 9.25 4.75 8M6 14.75 4.75 16M18 9.25 19.25 8M18 14.75 19.25 16M9 18.5 8.5 19.75M15 18.5 15.5 19.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                Managed IT Services
              </h3>
              <p className="text-xs text-slate-600">
                Full IT management so your business can focus on its core operations.
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2 lg:col-span-3">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                {/* Shield lock */}
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3.25 7 5.25v5.5c0 3.2 2.02 6.08 5 7.17 2.98-1.09 5-3.97 5-7.17v-5.5L12 3.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.75 11.75A1.25 1.25 0 0 1 13.25 11.75v1.5h-2.5v-1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 15.25v-.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-care-primary">
                Cybersecurity
              </h3>
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
                href="https://wa.me/2348066673312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                  {/* WhatsApp bubble */}
                  <span className="mr-1.5">
                    <svg
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.5 19.75 4.75 21l.75-2.3A7 7 0 1 1 12 19a6.9 6.9 0 0 1-2.7-.55L6.5 19.75Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 10.75c.2-1.1.7-.9 1-.85.25.05.6.65.7.9.1.25.05.4-.1.55-.15.15-.25.2-.15.4.1.2.55.9 1.2 1.2.6.3.65.2.85 0 .2-.2.45-.55.7-.5.25.05 1.6.75 1.6.9 0 .15-.3 1.1-1 1.4-.7.3-1.8.05-2.9-.6-1.1-.7-2.2-2-2.45-2.5-.25-.5-.4-1.2-.35-1.4Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Talk to us on WhatsApp
                </Button>
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
            <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium text-emerald-600">
                {/* Clock icon */}
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M12 8.25v3.25l2 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>6 Months Plan</span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-care-primary">
                15% Return
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Medium-term investment for clients seeking a balance between
                duration and returns.
              </p>
            </div>

            <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium text-emerald-700">
                {/* Calendar icon */}
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="4.25"
                    y="6.25"
                    width="15.5"
                    height="13.5"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 4.75v2.5M16 4.75v2.5M4.25 9.75h15.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>12 Months Plan</span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-care-primary">
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
              {
                label: 'Trusted and Professional Team',
                iconColor: 'text-care-primary',
              },
              {
                label: 'Reliable Service Delivery',
                iconColor: 'text-emerald-600',
              },
              {
                label: 'Transparent Processes',
                iconColor: 'text-sky-600',
              },
              {
                label: 'Client-Focused Approach',
                iconColor: 'text-amber-600',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ${item.iconColor}`}
                >
                  {/* Check / star like badge */}
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m9.25 12.25 1.75 1.75 3.75-3.75"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 group-hover:text-care-primary">
                  {item.label}
                </h3>
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