import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import corridor from '../assets/corrido.webp';

const About = () => {
  return (
    <section className="section bg-slate-50/60">
      <div className="container container-narrow">
        <SectionHeader
          eyebrow="About"
          title="CareOne Services Ltd."
          subtitle="CareOne Services Ltd is a diversified service company committed to delivering innovative solutions across healthcare, technology, consulting, and investment sectors."
          align="center"
        />

        <div className="about-layout mt-6 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
              {/* Info / profile icon */}
              <svg
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="8.5"
                  r="2.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.25 18.25A4.75 4.75 0 0 1 12 14.5h0a4.75 4.75 0 0 1 4.75 4.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Who we are</span>
            </div>

            <h3 className="about-heading text-base font-semibold text-slate-900">
              Who we are
            </h3>
            <p className="body-text mt-2 text-sm text-slate-700">
              CareOne Services Ltd is a multi-sector company delivering high-quality
              services in healthcare, digital solutions, consulting, and investment
              opportunities. We combine innovation with professionalism to provide
              reliable and impactful solutions.
            </p>
          </div>

          <div className="about-image-wrapper overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
            <img
              src={corridor}
              alt="Hospital corridor"
              className="about-image h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="about-grid mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
              {/* Target / mission icon */}
              <svg
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="6.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 5V3.5M12 20.5V19M5 12H3.5M20.5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Mission</span>
            </div>
            <h3 className="about-card-title text-sm font-semibold text-slate-900">
              Mission
            </h3>
            <p className="body-text mt-2 text-sm text-slate-700">
              To deliver high-quality and dependable services that improve lives and
              support business growth.
            </p>
          </Card>

          <Card>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
              {/* Vision / eye icon */}
              <svg
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 12s2.25-4.5 8.25-4.5 8.25 4.5 8.25 4.5-2.25 4.5-8.25 4.5S3.75 12 3.75 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Vision</span>
            </div>
            <h3 className="about-card-title text-sm font-semibold text-slate-900">
              Vision
            </h3>
            <p className="body-text mt-2 text-sm text-slate-700">
              To become a leading multi-service company recognized for excellence and
              integrity.
            </p>
          </Card>

          <Card>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
              {/* Values / star icon */}
              <svg
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m12 4.5 1.9 3.85 4.25.6-3.1 3.02.73 4.23L12 14.75 8.22 16.2l.73-4.23-3.1-3.02 4.25-.6L12 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Values</span>
            </div>
            <h3 className="about-card-title text-sm font-semibold text-slate-900">
              Values
            </h3>
            <ul className="about-values mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
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