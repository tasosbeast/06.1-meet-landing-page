import GridBox from "./GridBox";
import StepIndicator from "./StepIndicator";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: "some", margin: "-15% 0px -15% 0px" }}
      className="p-8 pb-16 lg:pb-18 md:pt-14 text-center"
    >
      <div className="main-content relative flex flex-col gap-16 max-w-[1120px] mx-auto">
        <StepIndicator number="01" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }, (_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <GridBox
                imageSrc={`/desktop/image-grid-${index + 1}.jpg`}
                altText={`Grid image ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-8 max-w-[504px] lg:max-w-[544px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            viewport={{ once: true, amount: "some" }}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-xs-mobile md:text-xs-tablet lg:text-xs tracking-wide red-hat-display-black text-cyan-600 uppercase"
            >
              Built for modern use
            </motion.h3>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-md-mobile md:text-md-tablet lg:text-md leading-md red-hat-display-black text-slate-900"
            >
              Smarter meetings, all in one place
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs leading-lg lg:text-sm"
          >
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </motion.p>
        </div>
      </div>
    </motion.main>
  );
}

export default Main;
