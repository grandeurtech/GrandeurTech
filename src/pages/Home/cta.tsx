"use client";

import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

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
const CTASection = () => {
  return (
    <section className="w-full py-16 bg-deep-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl bg-[#07122F]/30 border border-white/10 px-8 md:px-14 py-14 md:py-16"
        >
          {/* GRID PATTERN */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />
          </div>

          {/* GLOW */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#155DFC]/20 rounded-full blur-3xl" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* LEFT CONTENT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to Run Your
                <br />
                Business Smarter?
              </h2>

              <p className="text-white/65 mt-5 text-sm md:text-[15px] leading-7 max-w-lg">
                Let’s build systems that give you clarity, save you time,
                and drive growth. Join 500+ Nigerian businesses already
                winning with smarter operations.
              </p>
            </motion.div>

            {/* RIGHT BUTTONS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="flex flex-row items-center gap-4 shrink-0"
            >
              {/* PRIMARY BUTTON */}
              <NavLink to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group bg-[#155DFC] hover:bg-[#0F4FE0] transition-all duration-300 text-xs md:text-sm px-4 md:px-6 h-12 md:h-13 rounded-xl font-semibold text-white flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Book a Consultation

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <IoMdArrowRoundForward className="text-sm" />
                </motion.span>
              </motion.button>
              </NavLink>
              {/* SECONDARY BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-300 text-xs md:text-sm px-4 md:px-6 h-12 md:h-13 rounded-xl font-semibold text-white flex items-center justify-center whitespace-nowrap"
              >
                Chat on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;