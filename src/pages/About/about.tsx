"use client";

import aboutImg from "/aboutbg.png";
import AboutBody from "./aboutbody";
import Mission from "./mission";
import Trust from "./trust";

import { motion, type Variants } from "framer-motion";
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

export default function Hero() {
  return (
    <>
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-24"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* BACKGROUND ZOOM */}
        <motion.div
          initial={{
            scale: 1.15,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-deep-blue/60" />


        {/* BLUE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#155DFC]/25 via-[#07122F]/35 to-[#07122F]/85" />

        {/* GLOW */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#155DFC]/20 rounded-full blur-3xl"
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* SMALL LABEL */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="uppercase mt-10 tracking-0 text-xs md:text-sm text-white/80"
          >
            About Us
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-3xl md:text-6xl tracking-wider font-black text-white"
          >
            Our Mission is Your
            <br />
            Sustainable Growth
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="my-5 text-base text-sm md:text-xl font-400 leading-7 text-white/90 max-w-2xl mx-auto"
          >
            Grandeur Tech & IT Services was founded to bridge the gap
            between complex technology and practical business needs for
            growing SMEs in Nigeria.
          </motion.p>
        </div>

        {/* BOTTOM FADE */}
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-blue to-transparent" /> */}
      </section>

      {/* <Story /> */}
      <AboutBody />
      <Mission />
      <Trust />
    </>
  );
}