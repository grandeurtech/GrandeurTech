"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import emailjs from "@emailjs/browser";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },

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

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState<{
  type: "success" | "error";
  message: string;
} | null>(null);

const sendEmail = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!formRef.current) return;

  try {
    setLoading(true);

    await emailjs.sendForm(
      "service_ugfuwop",
      "template_7lskz7n",
      formRef.current,
      "0KzjqIbli3YN_byuB"
    );

    setPopup({
      type: "success",
      message: "Message delivered successfully!",
    });

    formRef.current.reset();

  } catch (error) {
    console.error(error);

    setPopup({
      type: "error",
      message:
        "Something went wrong. Please try again.",
    });

  } finally {
    setLoading(false);

    setTimeout(() => {
      setPopup(null);
    }, 4000);
  }
};

  return (
    <section className="bg-plainground py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-10 items-start">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >

            {/* TITLE */}
            <h2 className="text-xl md:text-3xl font-bold text-[#020618]">
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
                  <p className="uppercase tracking-[0.12em] text-xs font-bold text-primary">
                    Email Us
                  </p>

                  <h3 className="text-lg font-bold text-primary-foreground mt-2">
                    grandeurtechofficial@gmail.com
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
                  <p className="uppercase tracking-[0.12em] text-xs font-bold text-primary">
                    Call Us
                  </p>

                  <h3 className="text-lg font-bold text-primary-foreground mt-2">
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
                  <p className="uppercase tracking-[0.12em] text-xs font-bold text-primary">
                    Visit Us
                  </p>

                  <h3 className="text-lg font-bold text-primary-foreground mt-2">
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
              className="mt-14 bg-[#061234] rounded-2xl p-8 relative overflow-hidden"
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

          {/* RIGHT SIDE */}
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
            className="bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.06)]"
          >

            {/* FORM TITLE */}
            <h3 className="text-2xl font-bold text-[#020618]">
              Send us a Message
            </h3>

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-10"
            >

              {/* TOP GRID */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* FULL NAME */}
                <div>
                  <label className="block text-xs font-bold text-[#314158] mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="w-full h-16 rounded-2xl bg-[#F8FAFC] border border-transparent focus:border-primary shadow-sm px-5 outline-none transition-all duration-300"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-bold text-[#314158] mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full h-16 rounded-2xl bg-[#F8FAFC] border border-transparent focus:border-primary shadow-sm px-5 outline-none transition-all duration-300"
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div className="mt-6">
                <label className="block text-sm font-bold text-[#314158] mb-3">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="General Inquiry"
                  required
                  className="w-full h-16 rounded-2xl bg-[#F8FAFC] border border-transparent focus:border-primary shadow-sm px-5 outline-none transition-all duration-300"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-6">
                <label className="block text-sm font-bold text-[#314158] mb-3">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  required
                  className="w-full h-44 rounded-2xl bg-[#F8FAFC] border border-transparent focus:border-primary shadow-sm px-5 py-4 outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-8 w-full h-16 rounded-2xl bg-primary hover:bg-primary-hover transition-all duration-300 text-white font-bold flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(49,69,156,0.25)]"
              >

                {loading ? "Sending..." : "Send Message"}

                <Send size={18} />

              </motion.button>

            </form>

          </motion.div>

        </div>
      </div>
      {/* POPUP NOTIFICATION */}
<AnimatePresence>
  {popup && (
    <motion.div
      initial={{
        opacity: 0,
        y: -40,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -40,
        scale: 0.9,
      }}
      transition={{
        duration: 0.35,
      }}
      className="fixed top-8 right-8 z-[999] bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-2xl px-6 py-5 min-w-[320px]"
    >
      <div className="flex items-start gap-4">

        {/* ICON */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            popup.type === "success"
              ? "bg-green-100"
              : "bg-red-100"
          }`}
        >
          {popup.type === "success" ? (
            <CheckCircle2
              size={24}
              className="text-green-600"
            />
          ) : (
            <XCircle
              size={24}
              className="text-red-600"
            />
          )}
        </div>

        {/* TEXT */}
        <div>
          <h4 className="text-lg font-bold text-primary-foreground">
            {popup.type === "success"
              ? "Message Sent"
              : "Delivery Failed"}
          </h4>

          <p className="text-sm text-text mt-1 leading-6">
            {popup.message}
          </p>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default ContactSection;