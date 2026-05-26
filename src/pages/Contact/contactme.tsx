"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      // use numeric easing to satisfy TypeScript types
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const ContactSection: React.FC = () => {
  return (
    <section className="bg-background py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 items-start">

          {/* ==================================== */}
          {/* LEFT SIDE */}
          {/* ==================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground">
              Contact Information
            </h2>

            {/* CONTACT ITEMS */}
            <div className="space-y-8 mt-10">

              {/* EMAIL */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={2}
                whileHover={{
                  x: 6,
                }}
                className="flex items-start gap-5"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#EEF2F8] flex items-center justify-center">

                  <Mail
                    size={22}
                    className="text-primary"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.12em] text-[11px] font-bold text-text">
                    Email Us
                  </p>

                  <h3 className="text-xl font-black text-primary-foreground mt-2">
                    hello@grandeurtech.com.ng
                  </h3>
                </div>

              </motion.div>

              {/* PHONE */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={3}
                whileHover={{
                  x: 6,
                }}
                className="flex items-start gap-5"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#EEF2F8] flex items-center justify-center">

                  <Phone
                    size={22}
                    className="text-primary"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.12em] text-[11px] font-bold text-text">
                    Call Us
                  </p>

                  <h3 className="text-xl font-black text-primary-foreground mt-2">
                    +234 813 123 4567
                  </h3>
                </div>

              </motion.div>

              {/* ADDRESS */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={4}
                whileHover={{
                  x: 6,
                }}
                className="flex items-start gap-5"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#EEF2F8] flex items-center justify-center">

                  <MapPin
                    size={22}
                    className="text-primary"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.12em] text-[11px] font-bold text-text">
                    Visit Us
                  </p>

                  <h3 className="text-xl leading-8 font-black text-primary-foreground mt-2">
                    123 Corporate Avenue,
                    Victoria Island,
                    Lagos, Nigeria
                  </h3>
                </div>

              </motion.div>

            </div>

            {/* WHATSAPP CARD */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={5}
              whileHover={{
                y: -8,
              }}
              className="mt-14 bg-[#061234] rounded-[28px] p-8 relative overflow-hidden"
            >

              {/* GLOW */}
              <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-primary/20 rounded-full blur-3xl" />

              <div className="relative z-10">

                <h3 className="text-3xl font-black text-white leading-tight">
                  Fast Response
                  <br />
                  on WhatsApp
                </h3>

                <p className="text-white/60 leading-8 mt-5">
                  The quickest way to get a response is via
                  WhatsApp. Our team is available
                  Mon–Fri 9am–5pm.
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="mt-8 w-full h-15 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] transition-all duration-300 text-white font-bold flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(37,211,102,0.35)]"
                >

                  <MessageCircle size={20} />

                  Chat on WhatsApp

                </motion.button>

              </div>

            </motion.div>

          </motion.div>

          {/* ==================================== */}
          {/* RIGHT SIDE */}
          {/* ==================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="bg-white border border-black/5 rounded-[32px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.06)]"
          >

            {/* FORM TITLE */}
            <h3 className="text-4xl font-black text-primary-foreground">
              Send us a Message
            </h3>

            {/* FORM */}
            <form className="mt-10">

              {/* TOP GRID */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* FULL NAME */}
                <div>
                  <label className="block text-sm font-bold text-primary-foreground mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-16 rounded-2xl bg-[#F5F7FB] border border-transparent focus:border-primary px-5 outline-none transition-all duration-300"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-bold text-primary-foreground mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-16 rounded-2xl bg-[#F5F7FB] border border-transparent focus:border-primary px-5 outline-none transition-all duration-300"
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div className="mt-6">
                <label className="block text-sm font-bold text-primary-foreground mb-3">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="General Inquiry"
                  className="w-full h-16 rounded-2xl bg-[#F5F7FB] border border-transparent focus:border-primary px-5 outline-none transition-all duration-300"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-6">
                <label className="block text-sm font-bold text-primary-foreground mb-3">
                  Message
                </label>

                <textarea
                  placeholder="How can we help you?"
                  className="w-full h-44 rounded-2xl bg-[#F5F7FB] border border-transparent focus:border-primary px-5 py-5 outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-8 w-full h-16 rounded-2xl bg-primary hover:bg-primary-hover transition-all duration-300 text-white font-bold flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(49,69,156,0.25)]"
              >

                Send Message

                <Send size={18} />

              </motion.button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;