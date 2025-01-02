import { motion } from 'framer-motion';
import { Person, Phone, Celebration, Restaurant, Message, ChildCare } from '@mui/icons-material';
import { useState } from 'react';

interface GuestFields {
  name: string;
  dietary: string;
  ageGroup: 'adult' | 'under12' | 'under3';
}

const RsvpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [guests, setGuests] = useState<GuestFields[]>([{ name: '', dietary: '', ageGroup: 'adult' }]);

  if (isSubmitted) {
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
    if (!value) {
      setGuestCount(1);
      setGuests([{ name: '', dietary: '', ageGroup: 'adult' }]);
    }
  };

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    if (count > guests.length) {
      setGuests([...guests, ...Array(count - guests.length).fill({ name: '', dietary: '', ageGroup: 'adult' })]);
    } else {
      setGuests(guests.slice(0, count));
    }
  };

  const handleGuestChange = (index: number, field: keyof GuestFields, value: string) => {
    const newGuests = [...guests];
    newGuests[index] = { ...newGuests[index], [field]: value };
    setGuests(newGuests);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const contactInfo = {
      contact_phone: formData.get('phone'),
      attendance: isAttending ? 'Igen' : 'Nem',
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/fucskonorbi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...contactInfo,
          guests: guests,
          _subject: 'Új RSVP visszajelzés érkezett!',
          _cc: 'csengeszathmari@gmail.com',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError('Hiba történt a küldés során. Kérjük, próbáld újra később.');
      }
    } catch (err) {
      setError('Hiba történt a küldés során. Kérjük, próbáld újra később.');
    } finally {
      setIsSubmitting(false);
    }
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
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

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
                    value={guestCount}
                    onChange={(e) => handleGuestCountChange(Math.max(1, parseInt(e.target.value) || 1))}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Hány fővel érkezel?"
                  />
                </div>

                {/* Guest Details */}
                <div className="space-y-8">
                  {guests.map((guest, index) => (
                    <div key={index} className="space-y-4 p-6 border border-primary-light/20 rounded-lg">
                      <h4 className="font-semibold text-lg text-primary-dark">
                        {index + 1}. vendég adatai
                      </h4>
                      
                      {/* Guest Name */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Person className="h-5 w-5 text-primary" />
                        </div>
                        <input
                          type="text"
                          value={guest.name}
                          onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                          placeholder="Vendég neve"
                        />
                      </div>

                      {/* Guest Dietary Requirements */}
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <Restaurant className="h-5 w-5 text-primary" />
                        </div>
                        <textarea
                          value={guest.dietary}
                          onChange={(e) => handleGuestChange(index, 'dietary', e.target.value)}
                          rows={2}
                          className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                          placeholder="Ételérzékenység/speciális étrend (ha van)"
                        />
                      </div>

                      {/* Age Group */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <ChildCare className="h-5 w-5 text-primary" />
                          <span className="text-sm text-gray-600">Életkor</span>
                        </div>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              checked={guest.ageGroup === 'adult'}
                              onChange={() => handleGuestChange(index, 'ageGroup', 'adult')}
                              className="text-primary focus:ring-primary"
                            />
                            <span className="text-sm">12+ év</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              checked={guest.ageGroup === 'under12'}
                              onChange={() => handleGuestChange(index, 'ageGroup', 'under12')}
                              className="text-primary focus:ring-primary"
                            />
                            <span className="text-sm">4-12 év</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              checked={guest.ageGroup === 'under3'}
                              onChange={() => handleGuestChange(index, 'ageGroup', 'under3')}
                              className="text-primary focus:ring-primary"
                            />
                            <span className="text-sm">0-3 év</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
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
              disabled={isSubmitting || isAttending === null}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Küldés..." : "Küldés"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default RsvpForm; 