import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CeoProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-background flex items-center justify-center px-[10%] py-20"
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - CARD */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="relative z-10 w-100 md:w-105 h-140 md:h-210 bg-white justify-center align-center overflow-visible shadow-xl rounded-sm"
        >
          <img
            src="/ceo.jpg"
            alt="Victoria Ugbedojo"
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>

        {/* RIGHT SIDE - TEXT */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-primary font-bold tracking-widest uppercase"
          >
            MEET OUR FOUNDER
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold text-primary leading-tight"
          >
            Victoria Ugbedojo
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed font-bold"
          >
            Visionaire, Grandeur Tech & IT Services
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
            Victoria Ugbedojo is a Business Tech Consultant, tech educator, and 
            digital transformation specialist with extensive experience in helping 
            organizations and SMEs leverage technology for improved efficiency, 
            structure, and growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
            She holds a background in Mass Communication and a Masters degree in 
            Data Science Management, strengthening her expertise in data-driven 
            decision-making, analytics, and modern technology solutions. With over 
            a decade of experience spanning technology support, digital operations, 
            media, customer engagement, and business development, she specializes 
            in bridging the gap between traditional business practices and modern 
            digital systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
            Her core strength lies in designing and implementing practical, scalable 
            systems that enhance productivity, streamline workflows, and support 
            business growth. She is particularly focused on helping businesses adopt 
            automation, digital tools, and data insights to improve operational 
            performance and strategic planning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
            Under her leadership, Grandeur Tech and IT Services operates across 
            three core pillars: tech training, business tech consultancy, and 
            digital services. Through these, the organization equips professionals, 
            entrepreneurs, and corporate teams with essential digital skills, 
            project management tools, and emerging technology competencies needed 
            to thrive in a rapidly evolving digital economy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-text font-inter text-sm leading-relaxed"
          >
            She is passionate about building efficient systems, developing people, 
            and enabling businesses to adopt technology not just as a support tool, 
            but as a strategic driver of innovation and growth. Her work continues 
            to focus on empowering African businesses to become more structured, 
            competitive, and future-ready through practical and sustainable tech 
            adoption.
          </motion.p>
        </div>
      </div>
    </section>
  );
}