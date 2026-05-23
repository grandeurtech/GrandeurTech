"use client";

import { IoMailOutline } from "react-icons/io5";

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

const NewsletterSection = () => {
  return (
    <section className="w-full py-24 bg-deep-blue overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] bg-[#4052B5] px-8 md:px-16 py-16 md:py-20 text-center"
        >
          {/* BACKGROUND GLOW */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          />

          {/* BOTTOM LEFT SHAPE */}
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full" />

          {/* GRID EFFECT */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            {/* ICON */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              whileHover={{
                scale: 1.08,
                rotate: 6,
              }}
              className="mx-auto w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-2xl backdrop-blur-xl"
            >
              <IoMailOutline />
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="mt-8 text-3xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Never miss an update
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="mt-5 text-white/75 text-sm md:text-base leading-7 max-w-2xl mx-auto"
            >
              Join 2,000+ entrepreneurs getting weekly insights on
              business automation and growth.
            </motion.p>

            {/* FORM */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
            >
              {/* INPUT */}
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-1 h-14 rounded-xl bg-white/10 border border-white/10 px-5 text-white placeholder:text-white/40 outline-none backdrop-blur-xl"
              />

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full sm:w-auto bg-white hover:bg-[#F5F7FF] transition-all duration-300 px-8 h-14 rounded-xl font-semibold text-[#4052B5] whitespace-nowrap"
              >
                Join Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;