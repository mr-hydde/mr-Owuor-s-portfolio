
import React, { useState } from 'react';
import { getInsight } from '../services/geminiService';

const Vision: React.FC = () => {
  const [query, setQuery] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const result = await getInsight(query);
    setInsight(result || null);
    setLoading(false);
  };

  return (
    <section id="vision" className="py-24 bg-black border-y border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12">Vision & Philosophy</h2>
        <div className="mb-20 space-y-6">
          <p className="text-2xl md:text-3xl font-serif italic text-neutral-300">
            "Discipline is the bridge between goals and accomplishment. In a world of distraction, focus is the ultimate competitive advantage."
          </p>
        </div>

        <div className="bg-neutral-900/30 p-10 border border-neutral-800 rounded-sm">
          <h3 className="text-lg font-medium mb-6">Strategic Inquiry</h3>
          <p className="text-sm text-neutral-500 mb-8 max-w-lg mx-auto">
            Interact with our philosophy model to understand how we approach specific challenges in systems development or stewardship.
          </p>
          
          <form onSubmit={handleConsult} className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              placeholder="e.g., How do you view sustainable urban development?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-black border border-neutral-800 px-6 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button 
              disabled={loading}
              className="bg-white text-black px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Inquire'}
            </button>
          </form>

          {insight && (
            <div className="text-left bg-black p-8 border border-neutral-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-wrap">
                {insight}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Vision;
