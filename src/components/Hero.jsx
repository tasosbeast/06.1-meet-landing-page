// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftImageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <header className="pt-20 pb-8 px-8 md:pb-16 ">
      <div ref={ref} className="relative flex flex-col lg:flex-row lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/desktop/image-hero-left.png"
            />
            <motion.img
              style={{ y: leftImageY }}
              src="/tablet/image-hero.png"
              className="w-full h-auto  scale-140 sm:scale-125 md:scale-115 lg:scale-100 mb-20 lg:mb-0 lg:-translate-x-15 lg:-translate-y-6 "
              alt="Group video conference illustration"
            />
          </picture>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center flex flex-col gap-6 max-w-md mx-auto"
        >
          <h1 className="text-md sm:text-[2.7rem] md:text-lg-tablet lg:text-lg red-hat-display-black leading-md text-slate-900">
            Group Chat <br />
            for{" "}
            <span className="text-purple-600">
              <Typewriter
                words={["Friends", "Teams", "Families", "Everyone"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className=" red-hat-display-medium leading-lg text-slate-600 ">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button color="primary">
              Download <span className="text-cyan-300">v1.3</span>
            </Button>
            <Button color="secondary">What is it?</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <motion.img
            style={{ y: rightImageY }}
            src="/desktop/image-hero-right.png"
            alt=""
            className="hidden lg:block lg:translate-x-15 lg:translate-y-6 "
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Hero;
