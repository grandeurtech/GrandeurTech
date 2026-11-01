
import { useState, type FormEvent } from "react";

export default function PilotApplication() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fieldStyle =
    "w-full rounded-xl border border-slate-300 px-4 py-3 " +
    "focus:border-blue-600 focus:outline-none";

  const labelStyle =
    "mb-2 block text-sm font-semibold text-slate-700";

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="mb-4 text-3xl font-bold text-slate-900">
            Form Preview Complete
          </h1>
          <p className="text-slate-600">
            Your form passed the frontend test.
            Applications are not being saved yet.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
          >
            Back to Form
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-700">
            Grandeur Tech | Founding Pilot
          </p>

          <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Apply to Join the Founding 50
          </h1>

          <p className="text-lg leading-8 text-slate-600">
            We're inviting 50 growing SMEs to try
            Grandeur SME Manager, organise their business
            records and help shape a smarter business tool.
          </p>

          <p className="mt-4 font-semibold text-blue-700">
            Free during the pilot. Limited places available.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-10 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-slate-900">
              1. About Your Business
            </h2>

            <div>
              <label htmlFor="business_name" className={labelStyle}>
                Business Name *
              </label>
              <input id="business_name" name="business_name"
                required className={fieldStyle}
                placeholder="Enter your business name" />
            </div>

            <div>
              <label htmlFor="industry" className={labelStyle}>
                Industry *
              </label>
              <select id="industry" name="industry"
                required defaultValue="" className={fieldStyle}>
                <option value="" disabled>Select industry</option>
                <option>Food & Restaurant</option>
                <option>Retail & Trading</option>
                <option>Fashion & Beauty</option>
                <option>Real Estate</option>
                <option>Professional Services</option>
                <option>Manufacturing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className={labelStyle}>
                Business Location *
              </label>
              <input id="location" name="location"
                required className={fieldStyle}
                placeholder="City, State, Country" />
            </div>

            <div>
              <label htmlFor="business_age" className={labelStyle}>
                How long has your business operated?
              </label>
              <select id="business_age" name="business_age"
                defaultValue="" className={fieldStyle}>
                <option value="" disabled>Select duration</option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>4–6 years</option>
                <option>7+ years</option>
              </select>
            </div>
          </section>

          <section className="space-y-5 border-t pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              2. Your Contact Details
            </h2>

            <div>
              <label htmlFor="full_name" className={labelStyle}>
                Full Name *
              </label>
              <input id="full_name" name="full_name"
                required className={fieldStyle}
                placeholder="Your full name" />
            </div>

            <div>
              <label htmlFor="email" className={labelStyle}>
                Email Address *
              </label>
              <input id="email" name="email" type="email"
                required className={fieldStyle}
                placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="whatsapp" className={labelStyle}>
                WhatsApp Number *
              </label>
              <input id="whatsapp" name="whatsapp" type="tel"
                required className={fieldStyle}
                placeholder="+234..." />
            </div>

            <div>
              <label htmlFor="role" className={labelStyle}>
                Your Role in the Business
              </label>
              <select id="role" name="role"
                defaultValue="" className={fieldStyle}>
                <option value="" disabled>Select role</option>
                <option>Owner / Founder</option>
                <option>Manager</option>
                <option>Operations Staff</option>
                <option>Other</option>
              </select>
            </div>
          </section>

          <section className="space-y-5 border-t pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              3. Your Business Challenges
            </h2>

            <div>
              <label htmlFor="record_method" className={labelStyle}>
                How do you currently keep business records? *
              </label>
              <select id="record_method" name="record_method"
                required defaultValue="" className={fieldStyle}>
                <option value="" disabled>Select method</option>
                <option>Excel / Spreadsheets</option>
                <option>Notebooks / Paper</option>
                <option>POS Software</option>
                <option>Accounting Software</option>
                <option>Multiple Methods</option>
                <option>No Consistent System</option>
              </select>
            </div>

            <div>
              <label htmlFor="biggest_challenge" className={labelStyle}>
                What is your biggest business record challenge? *
              </label>
              <textarea id="biggest_challenge"
                name="biggest_challenge" required rows={4}
                className={fieldStyle}
                placeholder="Tell us what makes tracking your business difficult..." />
            </div>

            <div>
              <label htmlFor="priority" className={labelStyle}>
                What would you most like to improve?
              </label>
              <select id="priority" name="priority"
                defaultValue="" className={fieldStyle}>
                <option value="" disabled>Select priority</option>
                <option>Sales Tracking</option>
                <option>Expense Management</option>
                <option>Inventory Management</option>
                <option>Customer Records</option>
                <option>Business Performance Visibility</option>
                <option>All of the Above</option>
              </select>
            </div>

            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input type="checkbox" required
                name="pilot_consent" className="mt-1" />
              <span>
                I understand that this is a pilot programme
                and agree to be contacted about my application
                and provide feedback if selected. *
              </span>
            </label>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white hover:bg-blue-800"
          >
            Test Application Form
          </button>

          <p className="text-center text-sm text-slate-500">
            Preview only. This form does not yet submit or
            store personal information.
          </p>
        </form>
      </div>
    </main>
  );
}
