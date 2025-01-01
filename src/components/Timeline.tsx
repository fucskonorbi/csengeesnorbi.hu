import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import welcomeAnim from '../assets/animations/wedding.json';
import ceremonyAnim from '../assets/animations/ceremony.json';
import dinnerAnim from '../assets/animations/dinner.json';
import danceAnim from '../assets/animations/dance.json';
import partyAnim from '../assets/animations/party.json';

const timelineItems = [
  {
    time: '16:00',
    title: 'Vendégvárás',
    animation: welcomeAnim,
    gradient: 'from-primary-light/40 to-secondary-light/40',
  },
  {
    time: '17:00',
    title: 'Szertartás',
    animation: ceremonyAnim,
    gradient: 'from-secondary-light/40 to-primary-light/40',
  },
  {
    time: '20:00',
    title: 'Vacsora',
    animation: dinnerAnim,
    gradient: 'from-primary-light/40 to-secondary-light/40',
  },
  {
    time: '24:00',
    title: 'Mennyasszonytánc',
    animation: danceAnim,
    gradient: 'from-secondary-light/40 to-primary-light/40',
  },
  {
    time: 'Utána',
    title: 'Buli pirkadatig',
    animation: partyAnim,
    gradient: 'from-primary-light/40 to-secondary-light/40',
  },
];

const Timeline = () => {
  return (
    <div className="relative w-full bg-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,154,158,0.1),rgba(255,255,255,0)_50%)]" />
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-primary-light/5"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-32 bg-secondary-light/5"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-floral-pattern opacity-5 transform -rotate-45" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-floral-pattern opacity-5 transform rotate-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-dark mb-4">
            Programterv
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line with animated gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="h-full w-full bg-gradient-to-b from-primary-light via-secondary-light to-primary-light animate-gradient" />
          </div>

          {/* Timeline items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20`}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="font-display text-2xl text-primary-dark mb-2"
                    >
                      {item.time}
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 text-lg"
                    >
                      {item.title}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Animated Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg z-10 border-2 border-primary/20"
                >
                  <div className="w-12 h-12">
                    <Lottie
                      animationData={item.animation}
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                </motion.div>

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 