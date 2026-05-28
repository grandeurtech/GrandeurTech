"use client";

import { IoMdArrowRoundForward } from "react-icons/io";

import { motion, type Variants } from "framer-motion";
import { NavLink } from "react-router-dom";
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

const BusinessPainSection = () => {
  return (
    <section className="w-full bg-background py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <img
                src="/challenge.jpg"
                alt="business stress"
                className="w-full h-107.5 object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* FLOATING TAGS */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute top-6 left-6 bg-white rounded-xl px-5 py-3 shadow-xl"
            >
              <p className="text-sm font-semibold text-[#111827]">
                Too much manual work
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 -right-5 bg-white rounded-xl px-5 py-3 shadow-xl"
            >
              <p className="text-sm font-semibold text-[#111827]">
                Scattered operations
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 right-4 bg-white/50 rounded-xl px-5 py-3 shadow-xl"
            >
              <p className="text-sm font-semibold text-[#111827]">
                Poor customer tracking
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
          >
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm font-bold text-primary mb-5">
              The Challenge
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#020618] leading-none">
              Is Your Business
              <br />
              Running You?
            </h2>

            <p className="mt-4 text-text text-sm">
              Many growing businesses struggle with manual processes,
              scattered data, and inefficient systems that limit growth and
              increase stress.
            </p>

            <ul className="mt-4 space-y-5">
              {[
                "Spending hours on repetitive tasks",
                "Losing leads due to poor follow-up",
                "No clear visibility into profits and performance",
                "Over-dependence on specific staff members",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-sm text-text"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2" />

                  <span className="leading-7">{item}</span>
                </motion.li>
              ))}
            </ul>

            <NavLink to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                scale: 0.98,
              }}
              className="mt-6 bg-primary text-white py-4 px-8 rounded-2xl font-semibold flex items-center gap-4 shadow-xl">
              Let's Fix That
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <IoMdArrowRoundForward />
              </motion.span>
            </motion.button>
</NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BusinessPainSection;