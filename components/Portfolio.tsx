
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Current Ventures</h2>
            <h3 className="text-4xl font-serif">A Structured Portfolio</h3>
          </div>
          <p className="max-w-xs text-neutral-500 text-sm italic">
            Focusing on land, building, and systems for tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-neutral-900 border border-neutral-800 transition-all hover:border-neutral-700">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">{project.category}</p>
                <h4 className="text-xl font-serif mb-4">{project.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
