import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Person, Phone, Celebration, Restaurant, Message } from '@mui/icons-material';
import { useState } from 'react';

const RsvpForm = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
  const [isAttending, setIsAttending] = useState<boolean | null>(null);

  if (state.succeeded) {
    return (
      <div className="relative w-full bg-white py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center px-4"
        >
          <div className="bg-primary-light/20 rounded-2xl p-8 shadow-lg">
            <h3 className="font-display text-2xl text-primary-dark mb-4">
              Köszönjük a visszajelzést!
            </h3>
            <p className="text-gray-600">
              Hamarosan felvesszük veled a kapcsolatot.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  const handleAttendanceChange = (value: boolean) => {
    setIsAttending(value);
  };

  return (
    <div className="relative w-full bg-secondary-light/20 py-20">
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
            Visszajelzés
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
          >
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Person className="h-5 w-5 text-primary" />
              </div>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="Teljes név"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 mt-1" />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="Telefonszám"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 mt-1" />
            </div>

            {/* Attendance Radio */}
            <div className="space-y-3">
              <label className="flex items-center space-x-2 text-gray-700">
                <Celebration className="h-5 w-5 text-primary" />
                <span>Részt veszel az esküvőn?</span>
              </label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => handleAttendanceChange(true)}
                  className={`p-3 rounded-lg transition-all ${
                    isAttending === true
                      ? 'bg-primary text-white'
                      : 'border border-primary-light/20 text-gray-700 hover:bg-primary-light/10'
                  }`}
                >
                  Igen
                </button>
                <button
                  type="button"
                  onClick={() => handleAttendanceChange(false)}
                  className={`p-3 rounded-lg transition-all ${
                    isAttending === false
                      ? 'bg-primary text-white'
                      : 'border border-primary-light/20 text-gray-700 hover:bg-primary-light/10'
                  }`}
                >
                  Sajnos nem
                </button>
              </div>
              <input type="hidden" name="attendance" value={isAttending ? 'yes' : 'no'} />
            </div>

            {/* Conditional fields based on attendance */}
            {isAttending && (
              <>
                {/* Number of Guests */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Person className="h-5 w-5 text-primary" />
                  </div>
                  <input
                    id="guests"
                    type="number"
                    name="guests"
                    min="1"
                    max="10"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Hány fővel érkezel?"
                  />
                </div>

                {/* Dietary Requirements */}
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <Restaurant className="h-5 w-5 text-primary" />
                  </div>
                  <textarea
                    id="dietary"
                    name="dietary"
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Ételérzékenység/speciális étrend"
                  />
                </div>
              </>
            )}

            {/* Message */}
            <div className="relative">
              <div className="absolute top-3 left-3">
                <Message className="h-5 w-5 text-primary" />
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="Üzenet a párnak"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={state.submitting || isAttending === null}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Küldés..." : "Küldés"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default RsvpForm; 