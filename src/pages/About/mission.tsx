import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: <Target size={22} />,
    title: "Our Mission",
    description:
      "To empower Nigerian businesses with smart technology and streamlined operations that drive efficiency and measurable growth.",
  },
  {
    icon: <Eye size={22} />,
    title: "Our Vision",
    description:
      "To be the leading catalyst for digital transformation and operational excellence for SMEs across the African continent.",
  },
  {
    icon: <Heart size={22} />,
    title: "Our Values",
    description:
      "Integrity, Innovation, Excellence, and a relentless focus on our clients' success in everything we do.",
  },
];

const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-deep-blue py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">

          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className="group"
            >

              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-sm bg-primary text-sm flex items-center justify-center text-white shadow-lg shadow-blue-900/30"
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-white text-lg tracking-tight font-bold mt-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#94A3B8] text-sm leading-relaxed mt-2 max-w-md">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;