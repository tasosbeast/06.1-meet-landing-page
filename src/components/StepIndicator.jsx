// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function StepIndicator({ number }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "4rem" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{
          once: true,
          amount: "some",
          margin: "-15% 0px -15% 0px",
        }} // 👈 THIS IS THE FIX
        className="w-px bg-slate-300"
      />

      {/* Circle with number */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{
          once: true,
          amount: "some",
          margin: "-15% 0px -15% 0px",
        }} // 👈 SAME HERE
        className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-600 red-hat-display-black leading-normal shadow-md"
      >
        {number}
      </motion.div>
    </div>
  );
}

export default StepIndicator;
