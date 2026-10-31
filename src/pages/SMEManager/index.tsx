
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ClipboardList,
  ReceiptText,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Sales Tracking",
    description:
      "Record sales, payments and outstanding customer balances.",
    icon: BarChart3,
  },
  {
    title: "Expense Management",
    description:
      "Understand where your business money is going.",
    icon: ReceiptText,
  },
  {
    title: "Inventory Monitoring",
    description:
      "Keep track of products, stock movements and quantities.",
    icon: Boxes,
  },
  {
    title: "Customer Records",
    description:
      "Organise customer information and purchase history.",
    icon: Users,
  },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Tell us about your business and how you currently manage your records.",
  },
  {
    number: "02",
    title: "Get started",
    description:
      "Selected businesses receive access to the Excel-based pilot and onboarding guidance.",
  },
  {
    number: "03",
    title: "Shape the product",
    description:
      "Use SME Manager, share feedback and help us improve it.",
  },
];

const applyUrl = "/sme-manager/apply";

export default function SMEManager() {
  return (
    <main className="bg-white text-[#0F172B]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#F1F5FF] via-white to-white px-6 pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#31459C]">
              Grandeur Tech presents SME Manager
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Know your numbers.
              <span className="block text-[#31459C]">
                Run your business better.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#45556C]">
              A practical business management toolkit designed
              to help growing SMEs organise their sales,
              expenses, inventory and customer records —
              and make decisions with greater clarity.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={applyUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-[#31459C] px-7 py-4 font-semibold text-white transition hover:bg-[#203591]"
              >
                Join the Founding Pilot
                <ArrowRight size={19} />
              </a>

              <a
                href="#features"
                className="rounded-xl border border-slate-300 px-7 py-4 font-semibold text-[#31459C] hover:bg-slate-50"
              >
                Explore Features
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Free during the pilot. Limited founding cohort.
            </p>
          </div>

          {/* ILLUSTRATIVE DASHBOARD */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#31459C]">
                  SME Manager
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Business Overview
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-[#31459C]">
                Demo Dashboard
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["Sales", "₦2,450,000"],
                ["Expenses", "₦1,180,000"],
                ["Operating Result", "₦1,270,000"],
                ["Customer Balances", "₦340,000"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl bg-[#F4F6FC] p-4"
                >
                  <p className="mb-2 text-xs text-slate-500">
                    {label}
                  </p>
                  <p className="text-lg font-bold text-[#0F172B] sm:text-xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-slate-100 p-4">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-bold">Sales Snapshot</h3>
                <span className="text-xs text-slate-400">
                  Illustrative figures
                </span>
              </div>

              <div className="flex h-36 items-end justify-between gap-3">
                {[42, 62, 50, 77, 66, 91, 80].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div className="flex h-28 w-full items-end">
                        <div
                          className="w-full rounded-t-md bg-[#31459C]"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400">
                        {["M", "T", "W", "T", "F", "S", "S"][index]}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 font-bold uppercase tracking-widest text-[#31459C]">
            The Challenge
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Sales are happening. But do you really know
            where the money is going?
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-[#45556C]">
            Many growing businesses have records scattered
            across notebooks, spreadsheets, POS systems and
            WhatsApp messages. Getting a clear picture of
            performance becomes unnecessarily difficult.
          </p>

          <div className="grid gap-5 text-left md:grid-cols-3">
            {[
              "Records scattered across different places",
              "Unclear expenses and operating results",
              "Difficulty tracking stock and customer balances",
            ].map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <CheckCircle2
                  className="mb-4 text-[#31459C]"
                  size={25}
                />
                <p className="font-semibold">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="bg-[#F4F6FC] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 font-bold uppercase tracking-widest text-[#31459C]">
              The Solution
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Your business records. Better organised.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#45556C]">
              SME Manager brings important business
              information together in a practical,
              easy-to-use Excel toolkit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-8 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-[#31459C]">
                    <Icon size={27} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-[#45556C]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDING PILOT */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl bg-[#0F172B] p-8 text-white md:grid-cols-2 md:p-14">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-widest text-blue-300">
              The Founding 50
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              We're looking for 50 SMEs to help shape
              SME Manager.
            </h2>
            <p className="mb-7 leading-relaxed text-slate-300">
              We're inviting growing businesses to use
              the Excel-based pilot, share practical
              feedback and help us build a tool that
              solves real business challenges.
            </p>

            <a
              href={applyUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#31459C] hover:bg-blue-50"
            >
              Apply for the Pilot
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="space-y-5">
            {[
              "Free access during the pilot",
              "Practical onboarding guidance",
              "Opportunity to influence future features",
              "Designed for SMEs with existing business records",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-blue-300"
                  size={22}
                />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              How the Founding Pilot works
            </h2>
            <p className="mt-4 text-[#45556C]">
              Three simple steps to get involved.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <span className="text-4xl font-bold text-[#31459C]">
                  {step.number}
                </span>
                <h3 className="mb-3 mt-6 text-xl font-bold">
                  {step.title}
                </h3>
                <p className="text-[#45556C]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <ClipboardList
            className="mx-auto mb-6 text-[#31459C]"
            size={42}
          />
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            Could your business be one of the Founding 50?
          </h2>
          <p className="mb-9 text-lg text-[#45556C]">
            Help us build a better way for SMEs to
            understand their numbers and run their businesses.
          </p>
          <a
            href={applyUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-[#31459C] px-9 py-4 font-semibold text-white hover:bg-[#203591]"
          >
            Join the Founding Pilot
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
