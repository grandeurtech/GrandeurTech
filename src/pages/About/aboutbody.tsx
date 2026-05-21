import React from "react";
import { motion } from "framer-motion";

import WhyImage from "/whygrandeur.jpg";

const AboutIntro: React.FC = () => {
  return (
    <section className="bg-background py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src={WhyImage}
              alt="Grandeur Team"
              className="w-full h-75 object-cover rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
            />

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl leading-tight tracking-tight text-primary-foreground font-bold">
              Why Grandeur Tech Exists
            </h2>

            {/* PARAGRAPHS */}
            <div className="my-2 space-y-6">
              <p className="text-text text-sm font-300">
               We observed that many brilliant business owners were getting bogged down by manual operations, missing out on growth opportunities because they were "too busy" doing repetitive tasks.
              </p>

              <p className="text-text text-sm">
                Grandeur Tech & IT Services was built to change that. We provide the systems, training, and infrastructure that allow entrepreneurs to focus on what they do best—innovating and leading.
              </p>

            </div>

            {/* STATS */}
            <div className="flex items-center gap-20 mt-14">

              {/* STAT 1 */}
              <div>

                <h3 className="text-3xl font-extrabold text-primary">
                  500+
                </h3>

                <p className="text-text mt-2">
                  Businesses Supported
                </p>

              </div>

              {/* STAT 2 */}
              <div>

                <h3 className="text-3xl font-extrabold text-primary">
                  98%
                </h3>

                <p className="text-text mt-2">
                  Client Satisfaction
                </p>

              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;