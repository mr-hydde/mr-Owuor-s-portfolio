
import React from 'react';

const Contact: React.FC = () => {
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

          <form className="space-y-6">
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
              <select className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors">
                <option>Strategic Partnership</option>
                <option>Agriculture & Land</option>
                <option>Real Estate & Construction</option>
                <option>Technology Ventures</option>
                <option>Owuor Collection</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-400">Message</label>
              <textarea rows={6} className="w-full bg-neutral-50 border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-black text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors">
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
