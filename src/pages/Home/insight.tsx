"use client";


import { IoMdArrowRoundForward, IoMdMail } from "react-icons/io";
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

const insights = [
  {
    image: "/resource1.jpg",
    category: "AUTOMATION",
    title: "5 Tasks You Can Automate Today to Save Hours Every Week",
    date: "May 12, 2026",
  },
  {
    image: "/resource2.jpg",
    category: "BUSINESS GROWTH",
    title: "How Data-Driven Decisions Increase Profitability",
    date: "May 8, 2026",
  },
  {
    image: "/resource3.jpg",
    category: "OPERATIONS",
    title: "Building Standard Operating Procedures That Work",
    date: "April 28, 2026",
  },
];

const InsightsSection = () => {
  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="uppercase text-xs font-900 text-primary">
              Insights & Resources
            </p>

            <h2 className="mt-3 text-lg md:text-3xl font-bold text-[#0B1023] leading-tight">
              Latest Insights to Help Your Business Grow
            </h2>
          </motion.div>

          <NavLink to="/insights">
            <motion.button
              whileHover={{
                x: 5,
              }}
              className="flex items-center gap-2 text-primary font-semibold cursor-pointer"
            >
            View All Articles

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <IoMdArrowRoundForward />
            </motion.span>
          </motion.button>
          </NavLink>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-12 gap-6 mt-14">
          {/* ARTICLES */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-3">
            {insights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index + 1}
                whileHover={{
                  y: -10,
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-xs font-900 tracking-wide text-primary uppercase">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-sm font-bold text-[#0B1023] leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm text-text/50">
                    {item.date} • 5 min read
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NEWSLETTER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={5}
            whileHover={{
              y: -8,
            }}
            className="md:col-span-4 rounded-2xl bg-primary p-6 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-42 h-42 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center text-sm">
                <IoMdMail />
              </div>

              <h3 className="my-3 text-xl font-bold text-white">
                Stay Updated
              </h3>

              <p className="mt-4 text-white/75 leading-7 text-sm">
                Get expert tips on automation, business growth, and efficiency, delivered to your inbox every week.
              </p>

              <div className="mt-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 outline-none px-5 text-white placeholder:text-white/50"
                />

                <button className="mt-4 w-full h-14 rounded-2xl bg-white text-primary font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;