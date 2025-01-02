import { motion, LazyMotion, domAnimation } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Location from './components/Location';
import RsvpForm from './components/RsvpForm';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Navigation />
        <main className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <section id="home" className="w-full min-h-screen">
              <Hero />
            </section>
            <section id="schedule" className="w-full min-h-screen">
              <Timeline />
            </section>
            <section id="location" className="w-full min-h-screen">
              <Location />
            </section>
            <section id="rsvp" className="w-full">
              <RsvpForm />
            </section>
          </motion.div>
        </main>
      </div>
    </LazyMotion>
  );
}

export default App;
