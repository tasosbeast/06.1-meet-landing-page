// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function StepIndicator({ number }) {
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowPulse(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "4rem" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: "some" }}
        className="w-px bg-slate-300"
      />

      {/* Wrapper for pulse + circle */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Pulse behind */}

        {showPulse && (
          <span className="absolute w-full h-full rounded-full bg-cyan-300 pointer-events-none z-0 soft-pulse" />
        )}

        {/* Circle with number */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: "some" }}
          className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-600 red-hat-display-black leading-normal shadow-md"
        >
          {number}
        </motion.div>
      </div>
    </div>
  );
}

export default StepIndicator;
