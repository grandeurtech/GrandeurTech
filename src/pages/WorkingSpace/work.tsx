import Office from "./office";
import Location from "./location";
import Productivity from "./productivity";
const HeroSection = () => {
  return (
    <>
    <section className="relative w-full min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat pt-24 overflow-hidden">
      {/* Background Image */}
      <img
        src="/workingspacebg.jpg"
        alt="Workspace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 bg-[#02061899]/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-20 px-6 md:px-14 lg:px-24">
        <div className="max-w-3xl text-white">
          <p className="uppercase tracking-[0.3em] text-xs font-bold text-[#51A2FF]">
            Premium Workspaces
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-none">
            A Professional Space
            <br />
            <span className="text-[#2B7FFF] font-black">
              to Create and Grow
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-base leading-7 text-gray-200">
           Escape the distractions of home. Join a community of innovators, entrepreneurs, and professionals in Lagos' most inspiring workspace.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-primary hover:bg-peimary/90 transition px-7 py-3 rounded-lg text-sm font-semibold">
              Book a Tour
            </button>

            <button className="border border-white/20 bg-white/10 backdrop-blur-xs hover:bg-white/20 transition px-7 py-3 rounded-lg text-sm font-semibold">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </section>
    <Productivity />
    <Office/>
    <Location />
    </>
  );
};

export default HeroSection;