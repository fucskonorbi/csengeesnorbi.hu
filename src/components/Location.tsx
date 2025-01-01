import { motion } from 'framer-motion';
import { LocationOn, AccessTime, DirectionsCar } from '@mui/icons-material';
import kintImage from '../assets/kint.jpg';
import helyImage from '../assets/hely.jpg';
import teremImage from '../assets/terem.jpg';
import dekoracioImage from '../assets/dekoracio.jpeg';

const Location = () => {
  return (
    <div className="relative w-full bg-white py-20">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-floral-pattern opacity-5 transform -rotate-12" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-floral-pattern opacity-5 transform rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-dark mb-4">
            Helyszín
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.4762001906844!2d21.6238873!3d47.5291889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470e2c8e7f5555%3A0x1f7c7f7f7f7f7f7f!2sKereker%C5%91%20rendezv%C3%A9nyh%C3%A1z!5e0!3m2!1shu!2shu!4v1620000000000!5m2!1shu!2shu"
                className="w-full h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-700">
                <LocationOn className="w-6 h-6 text-primary" />
                <span className="text-lg">Kerekerdő rendezvényház, Debrecen</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <AccessTime className="w-6 h-6 text-primary" />
                <span className="text-lg">2025. július 4. 16:00</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <DirectionsCar className="w-6 h-6 text-primary" />
                <span className="text-lg">Parkolás az épület előtt biztosított</span>
              </div>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={kintImage}
                alt="Kültéri helyszín"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={helyImage}
                alt="Szertartás helyszín"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={teremImage}
                alt="Rendezvényterem"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={dekoracioImage}
                alt="Dekoráció"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location; 