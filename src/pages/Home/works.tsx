"use client";

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

const steps = [
  {
    number: "01",
    title: "Fill the Form",
    desc: "Tell us about your business and the challenges you face.",
  },
  {
    number: "02",
    title: "Business Audit",
    desc: "We analyze your operations and identify opportunities.",
  },
  {
    number: "03",
    title: "System Setup",
    desc: "We implement customized systems that fit your needs.",
  },
  {
    number: "04",
    title: "Training",
    desc: "We train your team and ensure smooth adoption.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-background py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.25em] text-xs font-bold text-[#4052B5]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1023]">
            A Simple 4-Step Process
          </h2>
        </motion.div>

        {/* STEPS */}
        <div className="relative mt-20">
          {/* LINE */}
          <div className="absolute top-7 left-0 w-full h-[1px] bg-[#D9DFEA]" />

          <div className="grid md:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index + 1}
                whileHover={{
                  y: -8,
                }}
                className="text-center"
              >
                {/* NUMBER */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  className="mx-auto w-14 h-14 rounded-full bg-white border border-[#E8ECF5] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#4052B5] font-extrabold text-lg"
                >
                  {step.number}
                </motion.div>

                <h3 className="mt-7 text-lg font-bold text-[#020618]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667085] max-w-[240px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;