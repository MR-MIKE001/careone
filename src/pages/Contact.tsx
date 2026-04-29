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
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
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
                {submitting ? 'Sending...' : 'Send message'}
              </Button>

              {submitted && (
                <p className="text-xs text-emerald-600">
                  Thank you. Your message has been sent.
                </p>
              )}

              {error && (
                <p className="text-xs text-red-600">
                  {error}
                </p>
              )}
            </div>
          </form>

          {/* Contact info panel */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                Address
              </h3>
              <p className="text-slate-700">
                Plot 500 East West Road,
                <br />
                Beside Lockdown Bar,
                <br />
                Port Harcourt, Nigeria
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                Contact
              </h3>
              <p className="text-slate-700">
                Phone: <span className="font-medium"><a href="tel:+2349049481295" className="footer-link">+2349049481295</a></span>
              </p>
              <p className="text-slate-700">
                WhatsApp: <span className="font-medium"><a
  href="https://wa.me/2349057561432"
  className="footer-link"
  target="_blank"
  rel="noopener noreferrer"
>
  +2349057561432
</a></span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                Business Hours
              </h3>
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