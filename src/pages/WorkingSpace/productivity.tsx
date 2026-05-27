import {
  Wifi,
  Coffee,
  ShieldCheck,
  Clock3,
  Users,
  CalendarDays,
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "High-Speed Fiber Internet",
    description:
      "Blazing fast, stable connection for all your heavy lifting.",
  },
  {
    icon: Coffee,
    title: "Premium Coffee & Kitchen",
    description:
      "Complimentary gourmet coffee, tea, and a fully equipped kitchen.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "24/7 security and personal lockers for your peace of mind.",
  },
  {
    icon: Clock3,
    title: "24/7 Access",
    description:
      "Work when you are most productive, day or night.",
  },
  {
    icon: Users,
    title: "Meeting Rooms",
    description:
      "Professional spaces to host clients and team sessions.",
  },
  {
    icon: CalendarDays,
    title: "Event Space",
    description:
      "Host your workshops and networking events with ease.",
  },
];

const ProductivitySection = () => {
  return (
    <section className="bg-plainground py-20 px-6 md:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
            Designed for Productivity
          </h2>

          <p className="mt-4 text-text leading-6 text-sm md:text-base">
            Everything you need to run your business smoothly is already here. Just bring your laptop and your ambition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] flex shadow-md items-center justify-center shrink-0">
                  <Icon
                    size={24}
                    className="text-[#2563EB] font-bold"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm font-normal leading-6 text-text">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;