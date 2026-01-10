
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Fidel B. Owuor. All rights reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="https://www.linkedin.com/in/fidel-baraka-16289428b?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/truefidelowuor?igsh=NW1rYjU1Z2FlcDdy" className="hover:text-white transition-colors">Instagram</a>

          <a href="#" className="hover:text-white transition-colors">Architecture Registry</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
