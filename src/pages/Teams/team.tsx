import { motion } from "framer-motion";
import CeoDetails from "./ceoProfile";
import Memeber from "./members";
import Cta from "./cta";

export default function LeadershipHero() {
  return (
    <>
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-plainground bg-cover pt-20 bg-center bg-no-repeat">

      {/* Content */}
       

      <div className="relative z-10 text-center px-6 max-w-3xl">
         <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary/60 text-lg mb-4 md:text-xl font-bold tracking-wide"
        >
          Our Leadership
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Meet The Team
        </motion.h1>

      

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-text text-sm md:text-lg max-w-2xl mx-auto mt-2"
        >
          A team focused on helping businesses grow through practical technology, 
          training, and digital solutions.
        </motion.p>
      </div>
    </section>
        <CeoDetails />
        <Memeber />
        <Cta />
    </>
  );
}