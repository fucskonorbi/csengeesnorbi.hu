import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import heroImage from '../assets/hero-cropped.webp';

const weddingDate = new Date('2025-07-04T16:00:00');

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Photo */}
      <div className="w-full md:w-1/2 h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`
          }}
        />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-6xl mb-2"
          >
            Csenge & Norbi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            Összeházasodunk!
          </motion.p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        {/* Floral decorations */}

        <div className="relative z-10 px-8 py-12 max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary-dark mb-4">
              2025.07.04
            </h2>
            <p className="text-xl text-gray-600">
              Kerekerdő rendezvényház, Debrecen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Countdown
              date={weddingDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  <div className="text-center">
                    <div className="bg-primary-light/20 rounded-lg p-2 sm:p-3">
                      <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-0.5 sm:mb-1">{days}</span>
                      <span className="text-xs sm:text-sm text-gray-600">nap</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-light/20 rounded-lg p-2 sm:p-3">
                      <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-0.5 sm:mb-1">{hours}</span>
                      <span className="text-xs sm:text-sm text-gray-600">óra</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-light/20 rounded-lg p-2 sm:p-3">
                      <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-0.5 sm:mb-1">{minutes}</span>
                      <span className="text-xs sm:text-sm text-gray-600">perc</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-light/20 rounded-lg p-2 sm:p-3">
                      <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-0.5 sm:mb-1">{seconds}</span>
                      <span className="text-xs sm:text-sm text-gray-600">mp</span>
                    </div>
                  </div>
                </div>
              )}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="#rsvp"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              Visszajelzés
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 