import { motion } from 'framer-motion';

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0E2117] flex items-center justify-center"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center">
        <motion.p
          className="font-serif text-4xl md:text-6xl text-[#F7F7F7]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          We Assist Co.
        </motion.p>
        <motion.p
          className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#78A873]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          In the habit of growing businesses
        </motion.p>
        <motion.div
          className="mx-auto mt-8 h-px bg-[#78A873]"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
