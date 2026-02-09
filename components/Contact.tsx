
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [nature, setNature] = useState<string>('Strategic Partnership');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nature, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Failed to send message');
      }

      setSuccess(true);
      setMessage('');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400">Full Name</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400">Email Address</label>
                <input type="email" className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-400">Nature of Inquiry</label>
              <select
                value={nature}
                onChange={(e) => setNature(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors"
              >
                <option>Strategic Partnership</option>
                <option>Agriculture & Land</option>
                <option>Real Estate & Construction</option>
                <option>Technology Ventures</option>
                <option>Owuor Collection</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-400">Message</label>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {success && <p className="text-sm text-green-600">Proposal submitted — thank you.</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 text-xs uppercase tracking-[0.2em] font-bold ${loading ? 'bg-neutral-600' : 'bg-black hover:bg-neutral-800'} text-white transition-colors`}
            >
              {loading ? 'Sending...' : 'Submit Proposal'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
