import { motion, type Variants } from "framer-motion";
import ContactMe from "./contactme";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: (i = 1) => ({
    opacity: 1,
    y: 0, 

    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const ContactHero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden">

        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          src="/contactbg.png"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[#050B1A]/80"
        />

        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
        />

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

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-14 lg:px-24 py-20">
          <div className="max-w-4xl min-h-[70vh] flex flex-col justify-center text-white">

            {/* Small Heading */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="uppercase tracking-[0.3em] text-[#3B82F6] text-sm font-semibold"
            >
              Get In Touch
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-5 text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Let’s Build Something
              <br />

              <span className="text-[#3B82F6]">
                Great Together
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="mt-8 max-w-2xl text-gray-300 text-base md:text-lg leading-8"
            >
              Have a project in mind? Looking to automate your
              business? Or just want to say hello? We are ready to
              listen and help.
            </motion.p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020618]/90 to-transparent" />
      </section>

      <ContactMe />
    </>
  );
};

export default ContactHero;