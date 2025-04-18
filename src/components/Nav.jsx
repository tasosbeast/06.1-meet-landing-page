/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Nav() {
  return (
    <div className="pt-12 md:pt-20 px-20">
      <motion.img
        src="/logo.svg"
        alt="Meet logo"
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export default Nav;
