import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function LeadershipCTA() {
  return (
    <section className="w-full bg-background py-20 px-[12%]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-3xl md:text-4xl font-playfair font-bold mb-4"
        >
          Building practical solutions for modern businesses.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text text-base md:text-lg max-w-2xl mx-auto"
        >
          Grandeur Tech & IT Services combines technology, creativity, and operational 
          excellence to help businesses grow with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
            <NavLink to="/contact">
          <button className="bg-primary text-white px-8 py-3 rounded-sm font-semibold hover:bg-primary/90 transition">
            Contact Us
          </button>
            </NavLink>
        </motion.div>
      </div>
    </section>
  );
}