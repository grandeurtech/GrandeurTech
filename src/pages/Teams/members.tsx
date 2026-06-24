import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Emmanuel Monyem",
    title: "CHIEF TECHNICAL OFFICER",
    image: "/jerry.jpg",
    description:
      "Emmanuel is a Fullstack web developer that is motivated by nothing but matchless excellence. His satisfaction is achieved only when clients truly feel satisfied with their job. He is also a progressive, logical, and balanced engineer and technology enthusiast with over 10 years experience in the oil and gas and tech industry.",
  },
  {
    name: "Jeremiah Adebayo",
    title: "CHIEF OPERATION OFFICER",
    image: "/jerry.jpg",
    description:
      "Jerry is a prolific Communications designer with an experience of over a 10 years in the world of creativity. He is also a skilled tutor with operational capabilities to oversee the affairs of the organisation. Jerry finds deep passion and satisfaction in teaching and mentoring.",
  },
];

export default function LeadershipTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full bg-plainground flex items-center justify-center px-[10%] py-20"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-sm overflow-hidden shadow-lg"
            >
              {/* Image - Top */}
              <div className="w-full aspect-square bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content - Bottom */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary-foreground">
                  {member.name}
                </h3>
                <p className="text-xs text-primary font-bold tracking-widest uppercase">
                  {member.title}
                </p>
                <p className="text-sm text-text font-inter leading-relaxed mt-2">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}