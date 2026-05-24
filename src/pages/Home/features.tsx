import {
  ShieldCheck,
  Headphones,
  Zap,
  BarChart3,
} from "lucide-react";

const FeatureBar = () => {
  return (
    <section className="bg-[#06132F] border-t border-white/5">

      <div className="max-w-8xl mx-auto px-6 md:px-14 lg:px-24 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ITEM */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#102041] flex items-center justify-center">
              <ShieldCheck className="text-blue-400" size={20} />
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Reliable Service
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                Consistent performance
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#102041] flex items-center justify-center">
              <Headphones className="text-blue-400" size={20} />
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Pro Support
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                Expert team guidance
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#102041] flex items-center justify-center">
              <Zap className="text-blue-400" size={20} />
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Fast Turnaround
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                Quick implementation
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#102041] flex items-center justify-center">
              <BarChart3 className="text-blue-400" size={20} />
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Growth Focus
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                Scalable solutions
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureBar;