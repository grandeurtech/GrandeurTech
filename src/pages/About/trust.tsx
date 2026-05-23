import React from "react";
import {
  Award,
  ShieldCheck,
  Rocket,
  Users,
} from "lucide-react";



const cards = [
  {
    icon: <Award size={24} />,

    title: "Certified Expertise",
    description:
      "Our Team Holds certicication from world class institution.",
  },
  {
    icon: <Users size={24} />,
    title: "Tailored Approach",
    description:
      "We don't believe in one-size-fits-all solutions.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Rapid Execution",
    description:
      "We execute fast so you can see result quickly",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Result Driven",
    description:
      "Every sytem we build is focused on your bottom line.",
  },
];

const AboutCardsSection: React.FC = () => {
  return (
    <section className="bg-plainground py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-center max-w-3xl mx-auto">
          <h2 className="mt-5 text-2xl md:text-3xl font-bold text-deep-blue leading-tight tracking-tight">
            Why Businesses Trust Grandeur Tech
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={index + 2}
              whileHover={{
                y: -10,
              }}
              className="bg-background rounded-3xl px-8 py-4 border border-[#E7ECF5] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/40"
            >

              {/* ICON */}
              <div className="w-10 h-10 rounded-sm text-primary flex items-center justify-center shadow-lg shadow-blue-500/20">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-8 text-xl text-deep-blue tracking-tight">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-text leading-8 text-base">
                {card.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutCardsSection;