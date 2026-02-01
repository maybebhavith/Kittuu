import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import AchievementSection from './components/AchievementSection';
import ValentineSection from './components/ValentineSection';

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="relative min-h-screen font-sans text-slate-800 overflow-hidden">
      <Background />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <AchievementSection onComplete={() => setStep(1)} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ValentineSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer / Music Control Placeholder */}
      <footer className="fixed bottom-4 right-4 z-20 opacity-50 text-xs text-romantic-800 pointer-events-none">
        Made with ❤️ for You
      </footer>
    </div>
  );
}

export default App;
