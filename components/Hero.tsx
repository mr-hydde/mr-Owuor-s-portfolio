
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Architecture Background" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
      </div>
      <div className="relative z-20 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
          Fidel B. Owuor
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light tracking-wide uppercase">
          Architect of Systems. Steward of Long-Term Value.
        </p>
        <div className="mt-12 h-16 w-px bg-neutral-700 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
