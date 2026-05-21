import React from "react";
import { motion } from "framer-motion";
import {
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import { PiSlidersHorizontalBold } from "react-icons/pi";

import PrintingImage from "/businesstech.jpg";

const BusinessTech: React.FC = () => {
  return (
    <section className="bg-plainground border-t border-black/25 py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
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

          {/* RIGHT CONTENT */}
          <motion.div
                      initial={{ opacity: 0, x: -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true }}
                    >
          
                      {/* ICON */}
                      <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] flex items-center justify-center">
                        <PiSlidersHorizontalBold className="text-primary text-3xl font-black"/>
                      </div>
          
                      {/* TITLE */}
                      <h2 className="text-xl md:text-3xl leading-tight tracking-tight font-normal text-primary-foreground mt-2">
                        Business Tech Services
                      </h2>
          
                      {/* DESCRIPTION */}
                      <p className="text-text text-sm md:text-lg leading-relaxed mt-4 max-w-2xl">
                      Comprehensive IT support and digital transformation consulting to help
                      you automate and scale your operations.  
                      </p>
          
                      {/* FEATURES */}
                      <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-4">
          
                        {[
                          "Operational Audits",
                          "Software Implementation",
                          "Cloud Solutions",
                          "IT Support & Maintenance",
                          "System Automation",
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
                      Get Started <ArrowRight size={18} />
                      </button>
                    </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BusinessTech;