import { motion, type Variants } from "framer-motion";

import Office from "./office";
import Location from "./location";
import Productivity from "./productivity";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      // use numeric easing to satisfy TypeScript types
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat pt-24 overflow-hidden">

        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          src="/workingspacebg.jpg"
          alt="Workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/70 bg-[#02061899]/90"
        />

        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center py-20 px-6 md:px-14 lg:px-24">
          <div className="max-w-3xl text-white">

            {/* SMALL LABEL */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="uppercase tracking-[0.3em] text-xs font-bold text-[#51A2FF]"
            >
              Premium Workspaces
            </motion.p>

            {/* TITLE */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-4 text-4xl md:text-6xl font-black leading-none"
            >
              A Professional Space
              <br />

              <span className="text-[#2B7FFF] font-black">
                to Create and Grow
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="mt-6 max-w-2xl text-sm md:text-base leading-7 text-gray-200"
            >
              Escape the distractions of home. Join a community of innovators,
              entrepreneurs, and professionals in Lagos' most inspiring
              workspace.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.8}
              className="flex flex-wrap gap-4 mt-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary hover:bg-primary/90 transition px-7 py-3 rounded-lg text-sm font-semibold"
              >
                Book a Tour
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 bg-white/10 backdrop-blur-xs hover:bg-white/20 transition px-7 py-3 rounded-lg text-sm font-semibold"
              >
                View Plans
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020618]/85 to-transparent" />
      </section>
        <Productivity />
        <Office />
        <Location />
    </>
  );
};

export default HeroSection;