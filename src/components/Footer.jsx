import Button from "./Button";
import StepIndicator from "./StepIndicator";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="text-center lg:text-left">
      <StepIndicator number="02" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: "some", margin: "-15% 0px -15% 0px" }}
        className="py-16 lg:py-28 px-8 lg:px-20 mt-[-28px] text-white  bg-cover bg-[linear-gradient(rgba(77,150,169,0.85),rgba(77,150,169,0.85)),url(/mobile/image-footer.jpg)] md:bg-[linear-gradient(rgba(77,150,169,0.85),rgba(77,150,169,0.85)),url(/tablet/image-footer.jpg)] lg:bg-[linear-gradient(rgba(77,150,169,0.85),rgba(77,150,169,0.85)),url(/desktop/image-footer.jpg)]"
      >
        <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:gap-8">
          <h2 className="flex-1 text-md-mobile md:text-md-tablet lg:text-md red-hat-display-black leading-md">
            Experience more together
          </h2>
          <p className=" flex-1 leading-lg lg:text-sm max-w-89">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <div className="flex-1 flex justify-center">
            <Button color="secondary">
              Download <span className="text-purple-300">v1.3</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
