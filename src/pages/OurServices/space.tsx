import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

import PrintingImage from "/coworkspace.png";

const PrintingServices: React.FC = () => {
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
                        <Coffee size={25} className="text-primary"/>
                      </div>
          
                      {/* TITLE */}
                      <h2 className="text-xl md:text-3xl leading-tight tracking-tight font-normal text-primary-foreground mt-2">
                        Co-Working Space
                      </h2>
          
                      {/* DESCRIPTION */}
                      <p className="text-text text-sm md:text-lg leading-relaxed mt-4 max-w-2xl">
                        A professional home for your business. Flexible workspaces designed to 
                        inspire productivity and foster collaboration.
                      </p>
          
                      {/* FEATURES */}
                      <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-4">
          
                        {[
                          "High-Speed Internet",
                          "Private Desk & Offices",
                          "Meeting Rooms",
                          "Coffee & Lounge Area",
                          "Networking Events",
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

export default PrintingServices;