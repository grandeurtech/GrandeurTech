"use client";

import { motion } from "framer-motion";
import aboutImg from "/aboutbg.png";
import Printing from "./printing";
import Space from "./space";
import Training from "./training";
import BusinessTech from "./businessTech";
import CTA from "./cta";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <>
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-24"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* BACKGROUND ANIMATION */}
        <motion.div
          initial={{
            scale: 1.12,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#020617]/90" />

        {/* BLUE GLOW OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-[#155DFC]/10 via-[#020617]/40 to-[#020617]/95" />

        {/* GRID EFFECT */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[26px_26px]" />
        </div>

        {/* CENTER GLOW */}
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-105 h-105 bg-[#155DFC]/20 rounded-full blur-3xl"
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* SMALL LABEL */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="uppercase tracking-[0.3em] text-xs font-bold text-[#51A2FF]"
          >
            Our Expertise
          </motion.p>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-3xl md:text-5xl font-bold leading-[1.05] text-white"
          >
            Solutions Designed for
            <br />
            <span className="font-bold text-3xl md:text-5xl text-[#2B7FFF]">
              Business Growth
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-4 text-sm md:text-lg leading-8 text-white/60 max-w-3xl mx-auto"
          >
            We provide a comprehensive ecosystem of services that
            handle the “back-end” of your business so you can focus
            on the front-end growth.
          </motion.p>
        </div>
      </section>

      <Printing />
      <Space />
      <Training />
      <BusinessTech />
      <CTA />
    </>
  );
}