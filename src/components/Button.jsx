/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Button({ color, children }) {
  const backgroundColors = {
    primary: "bg-cyan-600",
    secondary: "bg-purple-600",
  };

  const hoverColors = {
    primary: "bg-[#71C0D4]",
    secondary: "bg-[#B18BDD]",
  };

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden ${backgroundColors[color]} px-10 py-4 rounded-4xl red-hat-display-black text-white leading-lg duration-300 ease-in-out cursor-pointer`}
    >
      {/* Animated overlay */}
      <motion.span
        variants={{
          initial: { x: "-100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute inset-0 ${hoverColors[color]} rounded-4xl`}
      />

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export default Button;
