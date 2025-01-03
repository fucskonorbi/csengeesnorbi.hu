import { motion } from 'framer-motion';
import { LocationOn, AccessTime, DirectionsCar } from '@mui/icons-material';
import kintImage from '../assets/bejarat.png';
import helyImage from '../assets/dron.png';
import teremImage from '../assets/terem.jpg';
import dekoracioImage from '../assets/dekor.png';
const mapSource = `https://www.google.com/maps?q=${encodeURIComponent("Kerekerdő rendezvényház, Debrecen")}&hl=es;z=14&output=embed`;
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
                src={mapSource}
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
                <span className="text-lg">Limitált számban parkolási lehetőség a rendezvényház előtt.</span>
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