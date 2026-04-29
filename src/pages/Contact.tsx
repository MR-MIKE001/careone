// src/pages/Contact.tsx
import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../components/ui/SectionHeader';
import TextInput from '../components/ui/TextInput';
import SelectInput from '../components/ui/SelectInput';
import TextArea from '../components/ui/TextArea';
import Button from '../components/ui/Button';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    if (!formRef.current) {
      setSubmitting(false);
      setError('Unable to submit the form. Please try again.');
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log('Email sent successfully');
      setSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError('There was a problem sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Contact Us"
          title="Let’s discuss your needs"
          subtitle="Share a few details about your requirements. Our team will respond within business hours."
        />

        <div className="grid gap-6 md:grid-cols-[1.6fr,1.1fr]">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm"
          >
            <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-care-primary">
              {/* Form icon */}
              <svg
                className="h-3.5 w-3.5"
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
              <span>Enquiry form</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Full name"
                name="fullName"
                placeholder="Your name"
                required
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <TextInput
                label="Phone"
                name="phone"
                placeholder="0904..."
              />
              <TextInput
                label="Organization / Business"
                name="organization"
                placeholder="Your organisation"
              />
            </div>

            <SelectInput
              label="Service of interest"
              name="serviceOfInterest"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Digital Solutions</option>
              <option>Emergency Care Services</option>
              <option>Hospital Equipment</option>
              <option>Hospital Management Consulting</option>
              <option>Medical Training</option>
              <option>Marketing & Promotion</option>
              <option>Importation</option>
              <option>General Contracting</option>
              <option>Investment Program</option>
              <option>Other</option>
            </SelectInput>

            <TextArea
              label="Message"
              name="message"
              placeholder="Share a brief description of your needs, timelines and any questions."
              required
              rows={5}
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button type="submit" disabled={submitting}>
                <span className="mr-1.5">
                  {/* Paper plane icon */}
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.25 12.75 4 5.5 20 12l-16 6.5 1.25-6.25L12 12l-6.75-.75Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {submitting ? 'Sending...' : 'Send message'}
              </Button>

              {submitted && (
                <p className="flex items-center gap-1.5 text-xs text-emerald-600">
                  {/* Check icon */}
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m6.75 12.75 3 3.25 7-8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Thank you. Your message has been sent.</span>
                </p>
              )}

              {error && (
                <p className="flex items-center gap-1.5 text-xs text-red-600">
                  {/* Warning icon */}
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 4.25 4.75 18.5h14.5L12 4.25Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 9.75v3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="15.75" r="0.75" fill="currentColor" />
                  </svg>
                  <span>{error}</span>
                </p>
              )}
            </div>
          </form>

          {/* Contact info panel */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {/* Location pin */}
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4.25A5.25 5.25 0 0 0 6.75 9.5c0 3.5 4.25 7.75 5.1 8.6.1.1.3.1.4 0 .85-.85 5.1-5.1 5.1-8.6A5.25 5.25 0 0 0 12 4.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="9.5"
                    r="1.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Address</span>
              </div>
              <p className="text-slate-700">
                Plot 500 East West Road,
                <br />
                Beside Lockdown Bar,
                <br />
                Port Harcourt, Nigeria
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {/* Phone icon */}
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.25 5.75 8 4.5 5.75 6.75c.4 2.4 1.8 4.7 3.8 6.7 2 2 4.3 3.4 6.7 3.8l2.25-2.25-1.25-1.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Contact</span>
              </div>
              <p className="text-slate-700">
                Phone:{' '}
                <span className="font-medium">
                  <a href="tel:+2349049481295" className="text-care-primary hover:underline">
                    +2349049481295
                  </a>
                </span>
              </p>
              <p className="mt-1 text-slate-700">
                <span className="mr-1 font-medium">WhatsApp:</span>
                <a
                  href="https://wa.me/2349057561432"
                  className="inline-flex items-center gap-1 text-care-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp icon */}
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
                  <span>+2349057561432</span>
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {/* Clock icon */}
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8.25v3.25l2 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Business Hours</span>
              </div>
              <p className="text-slate-700">
                Monday – Saturday: 8:00 AM – 6:00 PM
              </p>
              <p className="text-slate-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;