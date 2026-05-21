import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

import PrintingImage from "/trainingservices.png";

const Training: React.FC = () => {
  return (
    <section className="bg-plainground py-28 border-t border-black/25 overflow-hidden">
      <div className="">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-5 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* ICON */}
            <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
              <BookOpen size={25} className="text-primary"/>
            </div>

            {/* TITLE */}
            <h2 className="text-xl md:text-3xl leading-tight tracking-tight font-normal text-primary-foreground mt-2">
              Training Services
            </h2>

            {/* DESCRIPTION */}
            <p className="text-text text-sm md:text-lg leading-relaxed mt-4 max-w-2xl">
              Empower your Workforce with the skills needed to thrive in a digital
              economy through our specialized training modules.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-4">

              {[
                "Tech Proficiency Training",
                "Business Management",
                "Process Automation Workshops",
                "Digital Marketing",
                "Data Analysis",
                "Cyber Security",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CircleCheck
                    size={18}
                    className="text-primary"
                  />

                  <span className="text-text text-sm md:text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* BUTTON */}
            <button className="bg-primary hover:bg-primary-hover transition-all duration-300 text-white px-8 py-4 rounded-lg flex items-center gap-3 font-bold mt-8 shadow-lg shadow-blue-500/20">

              Get Started

              <ArrowRight size={18} />

            </button>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="w-full h-100"
          >

            <img
              src={PrintingImage}
              alt="Printing Services"
              className="w-full h-full object-cover rounded-2xl shadow-[0_25px_100px_rgba(0,0,0,0.12)]"
            />

          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Training;