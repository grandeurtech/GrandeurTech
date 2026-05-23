"use client";

import { IoMdArrowRoundForward } from "react-icons/io";

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

const ServiceCTA = () => {
  return (
    <section className="w-full py-10 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden -20 md:py-10 px-8 md:px-14 text-center"
        >
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 h-112.5 bg-white/10 rounded-full blur-3xl"
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="text-2xl md:text-4xl font-extrabold text-white leading-tight"
            >
              Not sure which service you need?
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="mt-7 text-white/80 text-base md:text-lg leading-8 max-w-2xl mx-auto"
            >
              Book a free 15-minute discovery call and we’ll help you
              identify the biggest opportunities for automation and
              growth in your business.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="mt-12 flex justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group bg-white hover:bg-[#F5F7FF] transition-all duration-300 px-8 md:px-10 h-14 rounded-xl font-bold text-[#4052B5] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                Book Discovery Call

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <IoMdArrowRoundForward className="text-lg" />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;