import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import ContactMe from "./contactme"

const ContactHero = () => {
  return (
    <>
    <section className="relative overflow-hidden h-[85vh] min-h-[700px] flex items-center">
      {/* Background Image */}
      <img
        src="/contactbg.jpg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050B1A]/80" />

      {/* Animated Blur Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-14 lg:px-24 w-full">
        <div className="max-w-4xl">
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-[#3B82F6] text-sm font-semibold"
          >
            Get In Touch
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-5 text-5xl md:text-7xl font-extrabold leading-tight text-white"
          >
            Let’s Build Something
            <br />
            <span className="text-[#3B82F6]">
              Great Together
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="mt-8 max-w-2xl text-gray-300 text-base md:text-lg leading-8"
          >
            Have a project in mind? Looking to automate your
            business? Or just want to say hello? We are ready to
            listen and help.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-5 mt-12"
          >
            {/* Primary */}
            <button className="group relative overflow-hidden bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-3 text-white font-semibold shadow-[0_0_40px_rgba(37,99,235,0.45)]">
              <Send
                size={20}
                className="group-hover:translate-x-1 transition"
              />
              Send a Message
            </button>

            {/* Secondary */}
            <button className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-3 text-white font-semibold">
              <Phone size={20} />
              Call Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-20 w-3 h-3 rounded-full bg-blue-500"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-40 right-32 w-4 h-4 rounded-full bg-blue-400"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-60 w-2 h-2 rounded-full bg-blue-300"
      />
    </section>
    <ContactMe />
    </>
  );
};

export default ContactHero;