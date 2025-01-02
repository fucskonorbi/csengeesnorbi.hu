import { motion } from 'framer-motion';
import { Person, Phone, Celebration, Restaurant, Message, ChildCare } from '@mui/icons-material';
import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  guestNames?: string;
  childrenCount?: {
    between3And12: number;
    under3: number;
  };
  dietaryRequirements?: string;
  message?: string;
}

const RsvpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    guestNames: '',
    childrenCount: {
      between3And12: 0,
      under3: 0
    },
    dietaryRequirements: '',
    message: ''
  });

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
          </div>
        </motion.div>
      </div>
    );
  }

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Submitting form data:', {
        ...formData,
        attendance: isAttending ? 'Igen' : 'Nem'
      });

      const response = await fetch('https://formsubmit.co/ajax/fucskonorbi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          attendance: isAttending ? 'Igen' : 'Nem',
          guestNames: formData.guestNames || 'Nem megadott',
          childrenBetween3And12: formData.childrenCount?.between3And12 || 0,
          childrenUnder3: formData.childrenCount?.under3 || 0,
          dietaryRequirements: formData.dietaryRequirements || 'Nincs',
          message: formData.message || 'Nincs üzenet',
          _subject: 'Új RSVP visszajelzés érkezett!',
          _cc: 'csengeszathmari@gmail.com',
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (data.success) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed:', data);
        setError(`Hiba történt a küldés során: ${data.message || 'Ismeretlen hiba'}`);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(`Hiba történt a küldés során: ${err instanceof Error ? err.message : 'Ismeretlen hiba'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-secondary-light/20 py-20">
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

            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Person className="h-5 w-5 text-primary" />
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="Teljes név"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="Telefonszám"
              />
            </div>

            {/* Attendance Radio */}
            <div className="space-y-3 mx-3">
              <label className="flex items-center space-x-2 text-gray-700">
                <Celebration className="h-5 w-5 text-primary" />
                <span>Részt veszel az esküvőn?</span>
              </label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setIsAttending(true)}
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
                  onClick={() => setIsAttending(false)}
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
                {/* Guest Names */}
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <Person className="h-5 w-5 text-primary" />
                  </div>
                  <textarea
                    value={formData.guestNames}
                    onChange={(e) => handleInputChange('guestNames', e.target.value)}
                    required
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Kérlek sorold fel az érkezők teljes nevét"
                  />
                </div>

                {/* Children Count */}
                <div className="space-y-4 mx-3">
                  <label className="flex items-center space-x-2 text-gray-700">
                    <ChildCare className="h-5 w-5 text-primary" />
                    <span>Ezek közül hányan vannak 12 és 3 év között és hányan 3 év alatt?</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        3-12 év között
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          value={formData.childrenCount?.between3And12}
                          onChange={(e) => handleInputChange('childrenCount', {
                            ...formData.childrenCount,
                            between3And12: parseInt(e.target.value) || 0
                          })}
                          className="block w-full px-3 py-2 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        3 év alatt
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          value={formData.childrenCount?.under3}
                          onChange={(e) => handleInputChange('childrenCount', {
                            ...formData.childrenCount,
                            under3: parseInt(e.target.value) || 0
                          })}
                          className="block w-full px-3 py-2 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <Restaurant className="h-5 w-5 text-primary" />
                  </div>
                  <textarea
                    value={formData.dietaryRequirements}
                    onChange={(e) => handleInputChange('dietaryRequirements', e.target.value)}
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Az érkezőknek van-e bármilyen ételallergiája és/vagy speciális étrendje?"
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
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="block w-full pl-10 pr-3 py-3 border border-primary-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="Egyéb üzenet a párnak"
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