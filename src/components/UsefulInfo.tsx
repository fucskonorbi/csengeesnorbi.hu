import { motion } from 'framer-motion';

const UsefulInfo = () => {
  return (
    <div className="relative w-full bg-white py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,154,158,0.1),rgba(255,255,255,0)_50%)]" />
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
            Elérhetőségek
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-light/40 to-secondary-light/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
          >
            <h3 className="font-display text-2xl text-primary-dark mb-4 flex items-center gap-2">📞 Telefonszám</h3>
            <div className="space-y-2 text-gray-600">
                <p><span>Ha bármi kérdésed van, hívj minket bátran vagy írj nekünk Facebook üzenetben!</span></p>
              <p className="text-sm min-[340px]:text-base"><span className="font-medium">👰‍♀️&nbsp;&nbsp;Menyasszony:</span> +36 30 451 08 95</p>
              <p className="text-sm min-[340px]:text-base"><span className="font-medium">🤵‍♂️&nbsp;&nbsp;Vőlegény:</span> +36 30 651 63 60</p>
            </div>
          </motion.div>
          
        </div>
        {/* Várunk sok szeretettel! */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mt-16"
        >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-dark mb-4">Várunk sok szeretettel!</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default UsefulInfo; 