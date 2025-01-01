import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Kezdőlap' },
  { id: 'schedule', label: 'Program' },
  { id: 'location', label: 'Helyszín' },
  { id: 'rsvp', label: 'Visszajelzés' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative group"
                >
                  <span className="text-gray-800 hover:text-primary transition-colors duration-200 font-display text-lg">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-floral-pattern opacity-20 -z-10" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-floral-pattern opacity-20 -z-10 transform scale-x-[-1]" />
    </motion.header>
  );
};

export default Navigation; 