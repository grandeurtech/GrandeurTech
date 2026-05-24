import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import HeroImage from "/homebg.png";

/* COMPANY LOGOS */
import LogoOne from "/isuatechlogo.jpg";
import LogoTwo from "/fenergylogo.png";
import LogoThree from "/onuwahublogo.png";
import LogoFour from "/grillscapitollogo.png";
import LogoFive from "/springpetlogo.png";
import LogoSix from "/velstralogo.png";

import Feature from "./features";
import Challenge from "./challenge";
import Solution from "./solution";
import Works from "./works";
import Insight from "./insight";
import Cta from "./cta";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="bg-background overflow-hidden">
        
        {/* HERO */}
        <div className="min-h-screen pt-12 max-w-7xl mx-auto flex items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6 pt-8 relative z-10 flex-1"
          >

            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-[#E7EDF8] w-full rounded-full px-5 py-2 mt-15 mb-4"
            >
              <span className="text-[10px] tracking-[2px] uppercase font-bold text-primary">
                Empowering Businesses. Driving Growth.
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl leading-tight tracking-tight text-[#020618]"
            >
              Run Your Business
              <br />

              <span className="text-primary font-extrabold">
                with Clarity, Not
                <br />
                Chaos.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-text text-sm md:text-lg leading-relaxed mt-5 max-w-xl"
            >
              We help growing businesses automate operations,
              reduce manual work, and build smart systems that
              drive efficiency and sustainable growth.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-row gap-4 mt-8"
            >

              <button className="bg-primary text-sm hover:bg-primary-hover transition-all duration-300 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-blue-500/20">

                Get Started

                <ArrowRight size={18} />

              </button>

              <button className="bg-white text-sm border border-black/10 hover:border-primary hover:text-primary transition-all duration-300 text-black px-6 py-4 rounded-xl font-bold">
                Chat on WhatsApp
              </button>

            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex items-center justify-end flex-1"
          >

            {/* IMAGE CONTAINER */}
            <div className="relative w-175 h-135.7 overflow-hidden">

              {/* IMAGE */}
              <img
                src={HeroImage}
                alt="Business Dashboard"
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />

              {/* BLUE SHAPE */}
              <div
                className="absolute bottom-0 right-0 w-full h-62.5 bg-primary"
                style={{
                  clipPath: "polygon(55% 100%, 100% 25%, 100% 100%)",
                }}
              />

            </div>

          </motion.div>

        </div>

        {/* TRUSTED SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-black/5 py-8"
        >

          {/* TEXT */}
          <p className="text-xl md:text-2xl text-center text-text mb-8">
            Trusted by{" "}
            <span className="font-bold text-[#111827] text-2xl md:text-3xl">
              500+ businesses
            </span>{" "}
            across Nigeria
          </p>

          {/* MOVING LOGOS */}
          <div className="relative overflow-hidden">

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
              className="flex items-center gap-6 w-max"
            >

              {[
                LogoOne,
                LogoTwo,
                LogoThree,
                LogoFour,
                LogoFive,
                LogoSix,
                LogoOne,
                LogoTwo,
                LogoThree,
                LogoFour,
                LogoFive,
                LogoSix,
              ].map((logo, index) => (

                <div
                  key={index}
                  className="w-45 h-25 bg-white border border-black/10 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 px-6 shadow-sm"
                >

                  <img
                    src={logo}
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />

                </div>

              ))}

            </motion.div>

          </div>

        </motion.div>

      </section>

      <Feature />
      <Challenge />
      <Solution />
      <Works />
      <Insight />
      <Cta />
    </>
  );
};

export default HeroSection;