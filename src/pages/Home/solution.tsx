"use client";

import { motion } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";
import { LuBookOpen } from "react-icons/lu";
import { CgCoffee } from "react-icons/cg";
import { LuPrinter } from "react-icons/lu";
import { PiSlidersHorizontal } from "react-icons/pi"; 

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
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const services = [
  {
    title: "Printing Services",
    desc: "High-quality corporate printing and branding solutions for your business.",
    icon: <LuPrinter />,
  },
  {
    title: "Co-working Space",
    desc: "Premium shared offices and meeting rooms designed for productivity.",
    icon: <CgCoffee />,
  },
  {
    title: "Training Services",
    desc: "Upskill your team with practical tech and business management training.",
    icon: <LuBookOpen />,
  },
  {
    title: "Tech Services",
    desc: "Full IT support, software setup, and digital transformation consulting.",
    icon: <PiSlidersHorizontal />,
  },
];

const SolutionsSection = () => {
  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-xs font-bold text-primary">
            Our Solution
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1023] leading-tight">
            Smart Solutions for Modern Businesses
          </h2>

          <p className="mt-2 text-text leading-relaxed text-sm">
            Grandeur Tech & IT Services helps businesses work smarter with
            practical solutions <br /> across technology, print, training, and
            workspace support.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-6 mt-20">
          {/* FEATURED CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            whileHover={{
              y: -8,
            }}
            className="lg:col-span-6 rounded-[30px] bg-[#4052B5] p-8 relative overflow-hidden min-h-125"
          >
            {/* GLOW */}
            <div className="absolute -bottom-24 -right-24 w-75 h-75 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-white text-3xl font-bold leading-snug">
                SME Automation Sprint
              </h3>

              <p className="text-white/80 mt-6 leading-8 text-[15px]">
                In just 30 days, we help you set up simple, effective systems
                that automate your operations and give you full visibility into
                your business.
              </p>

              {/* IMAGE */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="flex justify-center mt-14"
              >
                <img
                  src="/solutionlogo.png"
                  alt="automation"
                  className="w-55 object-contain"
                />
              </motion.div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-10 w-full bg-white text-[#1B2559] h-15 rounded-2xl flex items-center justify-between px-6 font-semibold"
              >
                <span>Start Your Automation Journey</span>

                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <IoMdArrowRoundForward />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          {/* SERVICE CARDS */}
          <div className="lg:col-span-6 grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index + 2}
                whileHover={{
                  y: -8,
                  backgroundColor: "#ffffff",
                }}
                className="bg-[#F7F8FC] rounded-[26px] p-6 border border-[#EEF1F6] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="w-14 h-14 rounded-2xl bg-white text-[#4052B5] flex items-center justify-center text-xl shadow-sm"
                >
                  {service.icon}
                </motion.div>

                <h3 className="mt-8 text-lg font-bold text-[#020618]">
                  {service.title}
                </h3>

                <p className="mt-4 text-text leading-7 text-sm">
                  {service.desc}
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-8 flex text-xs items-center gap-3 text-[#4052B5] font-semibold cursor-pointer"
                >
                  Learn More

                  <motion.div
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  >
                    <IoMdArrowRoundForward />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;