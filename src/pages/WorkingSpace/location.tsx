"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Location from "/location.jpg";

import {
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

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
const scaleIn: Variants = {
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




const ContactShowcase: React.FC = () => {
  return (
    <section className="bg-background py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ========================================= */}
        {/* LOCATION SECTION */}
        {/* ========================================= */}

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="mt-28 rounded-[36px] overflow-hidden grid lg:grid-cols-2 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
        >

          {/* LEFT CONTENT */}
          <div className="bg-[#020B2D] px-10 md:px-14 py-16 relative overflow-hidden">

            {/* GLOW */}
            <div className="absolute top-[-120px] left-[-120px] w-[250px] h-[250px] bg-primary/20 rounded-full blur-3xl" />

            {/* LABEL */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="uppercase tracking-[0.25em] text-[11px] font-bold text-[#4B72FF] relative z-10"
            >
              Visit Us
            </motion.p>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="text-5xl md:text-6xl leading-[1] tracking-tight font-black text-white mt-6 relative z-10"
            >
              Prime Location
              <br />
              in Lagos
            </motion.h2>

            {/* LOCATION */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="flex items-start gap-4 mt-12 relative z-10"
            >

              <div className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center">

                <MapPin
                  size={18}
                  className="text-primary"
                />

              </div>

              <div>
                <h4 className="text-white font-bold text-lg">
                  Main Hub
                </h4>

                <p className="text-white/60 leading-7 mt-1">
                  123 Corporate Avenue,
                  Victoria Island,
                  Lagos, Nigeria
                </p>
              </div>
            </motion.div>

            {/* HOURS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              className="flex items-start gap-4 mt-10 relative z-10"
            >

              <div className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center">

                <Clock3
                  size={18}
                  className="text-primary"
                />

              </div>

              <div>
                <h4 className="text-white font-bold text-lg">
                  Business Hours
                </h4>

                <p className="text-white/60 leading-7 mt-1">
                  Mon - Fri: 8:00 AM - 8:00 PM
                  <br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={5}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-14 bg-white hover:bg-primary hover:text-white transition-all duration-300 text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center gap-3 relative z-10"
            >

              Get Directions

              <ArrowRight size={18} />

            </motion.button>
          </div>

          {/* RIGHT MAP */}
          <div className="relative min-h-[500px] overflow-hidden">

            {/* MAP IMAGE */}
            <img
              src={Location}
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#07122F]/60" />

            {/* LOCATION PIN */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "backOut",
              }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >

              {/* PULSE */}
              <motion.div
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute inset-0 w-20 h-20 rounded-full bg-primary/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              />

              {/* PIN */}
              <div className="w-16 h-16 rounded-full bg-primary border-[6px] border-white flex items-center justify-center shadow-[0_0_50px_rgba(49,69,156,0.7)]">

                <MapPin
                  size={24}
                  className="text-white"
                />

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactShowcase;