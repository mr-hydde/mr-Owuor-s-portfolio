import React from 'react';

interface ContactState {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const DEFAULT_STATE: ContactState = {
  name: '',
  email: '',
  inquiryType: '',
  message: ''
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Contact: React.FC = () => {
  const [contact, setContact] = React.useState<ContactState>(DEFAULT_STATE);
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const validate = () => {
    if (!contact.name.trim()) return 'Please enter your full name.';
    if (!contact.email.trim())  return 'Please enter your email address.';
    // simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contact.email)) return 'Please enter a valid email address.';
    if (!contact.inquiryType) return 'Please select the nature of your inquiry.';
    if (!contact.message.trim()) return 'Please enter your message.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          inquiryType: contact.inquiryType,
          message: contact.message
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send email');
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setContact(DEFAULT_STATE);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submitted && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded" role="status">
          Your message has been sent successfully!
        </div>
      )}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded" role="alert">
          {error}
        </div>
      )}

      <section id="contact" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">Engagement</h2>
              <h3 className="text-5xl font-serif mb-8">Serious Inquiries Only.</h3>
              <p className="text-neutral-600 max-w-md leading-relaxed">
                We prioritize value-aligned partnerships and long-term ventures. If you have a structured proposal or a strategic inquiry, please reach out via the provided channels.
              </p>

              <div className="mt-12 space-y-4">
                <p className="text-sm uppercase tracking-widest font-bold">Location</p>
                <p className="text-neutral-500">Nairobi | International</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[10px] uppercase tracking-widest text-neutral-400">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors"
                    required
                    aria-required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-neutral-400">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors"
                    required
                    aria-required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-[10px] uppercase tracking-widest text-neutral-400">Nature of Inquiry</label>
                <select
                  id="inquiryType"
                  value={contact.inquiryType}
                  onChange={(e) => setContact({ ...contact, inquiryType: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Strategic Partnership">Strategic Partnership</option>
                  <option value="Agriculture & Land">Agriculture & Land</option>
                  <option value="Real Estate & Construction">Real Estate & Construction</option>
                  <option value="Technology Ventures">Technology Ventures</option>
                  <option value="Owuor Collection">Owuor Collection</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-neutral-400">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Submit Proposal'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
