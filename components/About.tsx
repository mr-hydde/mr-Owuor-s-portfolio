
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">Personal Profile</h2>
          <p className="text-3xl md:text-4xl font-serif leading-relaxed text-neutral-900">
            Building ventures that endure requires more than capital; it requires a disciplined adherence to first principles and a commitment to intentional living.
          </p>
        </div>
        <div className="space-y-8 text-lg font-light leading-relaxed text-neutral-700">
          <p>
            Fidel B. Owuor is focused on the intersection of physical systems and digital efficiency. His work spans across foundational sectors—agriculture, real estate, and technology—where long-term thinking replaces short-term speculation.
          </p>
          <p>
            Rooted in the values of responsibility and rigorous learning, he approaches every venture with the goal of creating structured, scalable systems that serve not just the present moment, but future decades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
