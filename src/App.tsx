import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Location from './components/Location';
import RsvpForm from './components/RsvpForm';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <section id="home" className="w-full">
            <Hero />
          </section>
          <section id="schedule" className="w-full">
            <Timeline />
          </section>
          <section id="location" className="w-full">
            <Location />
          </section>
          <section id="rsvp" className="w-full">
            <RsvpForm />
          </section>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
