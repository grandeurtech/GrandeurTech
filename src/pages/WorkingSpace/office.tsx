"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";


/* IMAGES */
import OfficeOne from "/office1.png";
import OfficeTwo from "/office2.png";
import OfficeThree from "/office3.png";

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

const ContactShowcase: React.FC = () => {
  return (
    <section className="bg-background py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ========================================= */}
        {/* OFFICE GALLERY */}
        {/* ========================================= */}

        <div className="grid md:grid-cols-3 gap-5 items-end">

          {/* IMAGE 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            whileHover={{
              y: -10,
            }}
            className="overflow-hidden rounded-[6px]"
          >

            <img
              src={OfficeOne}
              alt="Office Workspace"
              className="w-full h-[540px] object-cover hover:scale-105 transition-all duration-700"
            />

          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            whileHover={{
              y: -10,
            }}
            className="overflow-hidden rounded-[6px] mt-[-12px]"
          >

            <img
              src={OfficeTwo}
              alt="Office Team"
              className="w-full h-[620px] object-cover hover:scale-105 transition-all duration-700"
            />

          </motion.div>

          {/* IMAGE 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            whileHover={{
              y: -10,
            }}
            className="overflow-hidden rounded-[6px]"
          >

            <img
              src={OfficeThree}
              alt="Office Collaboration"
              className="w-full h-[540px] object-cover hover:scale-105 transition-all duration-700"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactShowcase;