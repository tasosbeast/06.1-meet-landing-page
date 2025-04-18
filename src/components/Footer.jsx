import Button from "./Button";
import StepIndicator from "./StepIndicator";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="text-center lg:text-left">
      <StepIndicator number="02" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: "some", margin: "-15% 0px -15% 0px" }}
        className="py-16 lg:py-28 px-8 lg:px-20 mt-[-28px] text-white bg-cover bg-[linear-gradient(rgba(77,150,169,0.85),rgba(77,150,169,0.85)),url(/mobile/image-footer.jpg)] md:bg-[linear-gradient(rgba(77,150,169,0.85),rgba(77,150,169,0.85)),url(/tablet/image-footer.jpg)] lg:bg-[linear-gradient(rgba(77,150,169,0.85),rgba(77,150,169,0.85)),url(/desktop/image-footer.jpg)]"
      >
        <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-8">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-md-mobile md:text-md-tablet lg:text-md red-hat-display-black leading-md"
          >
            Experience more together
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 leading-lg lg:text-sm max-w-89"
          >
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex-1 flex justify-center"
          >
            <Button color="secondary">
              Download <span className="text-purple-300">v1.3</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
