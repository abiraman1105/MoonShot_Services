import { useState } from 'react'
import Reveal from '../common/Reveal.jsx'
import { SITE } from '../../constants/theme.js'
import './Contact.css'
import emailjs from "@emailjs/browser";

const INITIAL_FORM = { name: '', email: '', budget: '', message: '' }

function validate(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Please enter your name.'

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.message.trim()) {
    errors.message = 'Please tell us a little about your project.'
  } else if (form.message.trim().length < 12) {
    errors.message = 'Please add a few more details (at least 12 characters).'
  }

  return errors
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    try {
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     name: form.name,
      //     email: form.email,
      //     budget: form.budget || "Not specified",
      //     message: form.message,
      //   },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );

      console.log("Email sent successfully via EmailJS");
      console.log("Now sending data to Google Apps Script...");
      console.log("Google Apps Script URL:", import.meta.env.VITE_GOOGLE_SCRIPT_URL);
      await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
        name: form.name,
        email: form.email,
        budget: form.budget || "Not specified",
        message: form.message,
        }),
      });

      console.log("Data sent successfully to Google Apps Script");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <Reveal className="contact__intro">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title contact__title">Let's build your next moonshot</h2>
          <p className="section-subtitle contact__subtitle">
            Tell us about your project and we'll respond within one business day
            with next steps and a rough timeline.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__details-label">Email</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <span className="contact__details-label">Phone</span>
              <a href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}>{SITE.phone}</a>
            </li>
            <li>
              <span className="contact__details-label">Address</span>
              <span>{SITE.address}</span>
            </li>
          </ul>

          <a href={SITE.whatsapp} className="btn btn-secondary contact__whatsapp" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={1} className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="budget">Estimated Budget (optional)</label>
              <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                <option value="">Select a range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-40k">$15,000 – $40,000</option>
                <option value="40k-plus">$40,000+</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === 'success' && (
              <p className="form-success" role="status">
                Thanks — your message has been received. We'll be in touch shortly.
              </p>
            )}

            {status === "error" && (
              <p className="form-error" role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
