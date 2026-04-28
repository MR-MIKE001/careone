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

  // Ref to the HTMLFormElement for sendForm
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
        });
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
    <section className="section section-muted">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s discuss your requirements"
          subtitle="Share a few details about your facility and the services you’re interested in. Our team will get back to you promptly."
        />

        <div className="contact-layout">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="contact-grid">
              <TextInput
                label="Full name"
                name="fullName"          
                placeholder="Dr. Jane Doe"
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
                placeholder="+234 ..."
              />
              <TextInput
                label="Organization / Hospital"
                name="organization"     
                placeholder="Your facility name"
              />
            </div>

            <SelectInput
              label="Service of interest"
              name="serviceOfInterest"   
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Hospital Equipment</option>
              <option>Hospital Management Consultants</option>
              <option>Specialized Medical Care Training</option>
              <option>Marketing Promotion</option>
              <option>Importation</option>
              <option>General Contractor</option>
              <option>Other</option>
            </SelectInput>

            <TextArea
              label="Message"
              name="message"           
              placeholder="Share a brief description of your needs, timelines and any questions."
              required
              rows={5}
            />

            <div className="contact-actions">
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send message'}
              </Button>
              {submitted && (
                <p className="contact-success">
                  Thank you. Your message has been sent.
                </p>
              )}
              {error && (
                <p className="contact-error">
                  {error}
                </p>
              )}
            </div>
          </form>

          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contact details</h3>
              <p className="body-text">
                Email: <strong>info@careoneservices.com</strong>
              </p>
              <p className="body-text">
                Phone: <strong>+234 000 000 0000</strong>
              </p>
              <p className="body-text">
                Location: <strong>Lagos, Nigeria</strong>
              </p>
            </div>

            <div className="contact-info-card">
              <h3 className="contact-info-title">Office hours</h3>
              <p className="body-text">Monday – Friday, 9:00am – 5:00pm</p>
              <p className="body-text">Weekends by appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;