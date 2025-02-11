import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import welcomeAnim from '../assets/animations/wedding.json';
import ceremonyAnim from '../assets/animations/ceremony.json';
import dinnerAnim from '../assets/animations/dinner.json';
import danceAnim from '../assets/animations/dance.json';
import partyAnim from '../assets/animations/party.json';
import { useState, useRef } from 'react';

const timelineItems = [
  {
    time: '16:00',
    title: 'Vendégvárás',
    description: 'Érkezz időben, hogy együtt izgulhassunk az első pillanattól kezdve! 🤗',
    animation: welcomeAnim,
    gradient: 'from-primary-light/40 to-secondary-light/40',
    segmentEnd: 120,
  },
  {
    time: '17:00',
    title: 'Szertartás',
    description: 'A nagy pillanat, amikor kimondjuk a boldogító igent! 💍',
    animation: ceremonyAnim,
    gradient: 'from-secondary-light/40 to-primary-light/40',
    segmentEnd: 120,
  },
  {
    time: '20:00',
    title: 'Vacsora',
    description: 'Húsleves és töltött káposzta, majd egy finom tál a végén 🍽️',
    animation: dinnerAnim,
    gradient: 'from-primary-light/40 to-secondary-light/40',
    segmentEnd: 45,
  },
  {
    time: '24:00',
    title: 'Menyasszonytánc',
    description: 'Itt az ideje megtáncoltatni a menyasszonyt! 💃',
    animation: danceAnim,
    gradient: 'from-secondary-light/40 to-primary-light/40',
    segmentEnd: 120,
  },
  {
    time: 'Utána',
    title: 'Buli pirkadatig',
    description: 'Tánc, móka, kacagás, amíg a lábunk bírja! 🎉',
    animation: partyAnim,
    gradient: 'from-primary-light/40 to-secondary-light/40',
    segmentEnd: 120,
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
            {timelineItems.map((item, index) => {
              const lottieRef = useRef<any>();
              const [isHovered, setIsHovered] = useState(false);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 px-4 md:px-12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } mb-8 md:mb-0`}>
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
                        className="text-gray-600"
                      >
                        <div className="text-lg font-medium mb-2">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      if (lottieRef.current) {
                        lottieRef.current.goToAndPlay(0);
                      }
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                      if (lottieRef.current) {
                        lottieRef.current.pause();
                      }
                    }}
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg z-10 border-2 border-primary/20 cursor-pointer"
                  >
                    <div className="w-12 h-12">
                      <Lottie
                        lottieRef={lottieRef}
                        animationData={item.animation}
                        loop={isHovered}
                        autoplay={true}
                        initialSegment={[0, item.segmentEnd]}
                        onComplete={() => {
                          if (!isHovered && lottieRef.current) {
                            lottieRef.current.pause();
                          }
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Empty space for the other side - hidden on mobile */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 