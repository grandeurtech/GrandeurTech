
import { useState, type FormEvent } from "react";

export default function PilotApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fieldStyle =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 " +
    "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

  const labelStyle =
    "mb-2 block text-sm font-semibold text-slate-700";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");

    const data = new FormData(e.currentTarget);

    const getValue = (name: string) =>
      String(data.get(name) ?? "").trim();

    const payload = {
      full_name: getValue("full_name"),
      business_name: getValue("business_name"),
      email: getValue("email"),
      phone: getValue("whatsapp"),
      industry: getValue("industry"),
      location: getValue("location"),
      business_age: getValue("business_age") || null,
      employee_count: getValue("employee_count") || null,
      record_keeping: getValue("record_method"),
      biggest_challenge: getValue("biggest_challenge"),
      data_availability: getValue("data_availability") || null,
      pilot_commitment: data.get("pilot_consent") === "on"
    };

    try {
      const response = await fetch("/api/pilot-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to submit your application."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <div className="mb-6 text-5xl">🎉</div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900">
            Application Submitted Successfully!
          </h1>

          <p className="mb-4 leading-7 text-slate-600">
            Thank you for applying to join the Grandeur
            SME Manager Founding 50 Pilot.
          </p>

          <p className="leading-7 text-slate-600">
            Your application has been received.
            Our team will review it and contact you
            using the details provided.
          </p>

          <a
            href="/sme-manager"
            className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Return to SME Manager
          </a>
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

          {/* SECTION 1 */}
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-slate-900">
              1. About Your Business
            </h2>

            <div>
              <label htmlFor="business_name" className={labelStyle}>
                Business Name *
              </label>
              <input
                id="business_name"
                name="business_name"
                required
                maxLength={150}
                className={fieldStyle}
                placeholder="Enter your business name"
              />
            </div>

            <div>
              <label htmlFor="industry" className={labelStyle}>
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                defaultValue=""
                className={fieldStyle}
              >
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
              <input
                id="location"
                name="location"
                required
                maxLength={150}
                className={fieldStyle}
                placeholder="City, State, Country"
              />
            </div>

            <div>
              <label htmlFor="business_age" className={labelStyle}>
                How long has your business operated?
              </label>
              <select
                id="business_age"
                name="business_age"
                defaultValue=""
                className={fieldStyle}
              >
                <option value="" disabled>Select duration</option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>4–6 years</option>
                <option>7+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="employee_count" className={labelStyle}>
                How many employees does your business have?
              </label>
              <select
                id="employee_count"
                name="employee_count"
                defaultValue=""
                className={fieldStyle}
              >
                <option value="" disabled>Select team size</option>
                <option>Just me</option>
                <option>2–5 employees</option>
                <option>6–10 employees</option>
                <option>11–20 employees</option>
                <option>21–50 employees</option>
                <option>More than 50 employees</option>
              </select>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-5 border-t pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              2. Your Contact Details
            </h2>

            <div>
              <label htmlFor="full_name" className={labelStyle}>
                Full Name *
              </label>
              <input
                id="full_name"
                name="full_name"
                required
                maxLength={150}
                className={fieldStyle}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className={labelStyle}>
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                className={fieldStyle}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className={labelStyle}>
                WhatsApp Number *
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                maxLength={30}
                className={fieldStyle}
                placeholder="+234..."
              />
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-5 border-t pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              3. Your Business Challenges
            </h2>

            <div>
              <label htmlFor="record_method" className={labelStyle}>
                How do you currently keep business records? *
              </label>
              <select
                id="record_method"
                name="record_method"
                required
                defaultValue=""
                className={fieldStyle}
              >
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
              <textarea
                id="biggest_challenge"
                name="biggest_challenge"
                required
                maxLength={2000}
                rows={4}
                className={fieldStyle}
                placeholder="Tell us what makes tracking your business difficult..."
              />
            </div>

            <div>
              <label htmlFor="data_availability" className={labelStyle}>
                Do you currently have business records available?
              </label>
              <select
                id="data_availability"
                name="data_availability"
                defaultValue=""
                className={fieldStyle}
              >
                <option value="" disabled>Select an option</option>
                <option>Yes, organised records</option>
                <option>Yes, but records are scattered</option>
                <option>Some records are available</option>
                <option>Very limited records</option>
                <option>No records yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority" className={labelStyle}>
                What would you most like to improve?
              </label>
              <select
                id="priority"
                name="priority"
                defaultValue=""
                className={fieldStyle}
              >
                <option value="" disabled>Select priority</option>
                <option>Sales Tracking</option>
                <option>Expense Management</option>
                <option>Inventory Management</option>
                <option>Customer Records</option>
                <option>Business Performance Visibility</option>
                <option>All of the Above</option>
              </select>
              <p className="mt-2 text-xs text-slate-500">
                This question is for pilot research.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-5 border-t pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              4. Pilot Participation
            </h2>

            <p className="leading-7 text-slate-600">
              Selected participants will receive access
              to the SME Manager pilot at no cost.
              We ask participants to use the toolkit
              and share feedback to help us improve it.
            </p>

            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                required
                name="pilot_consent"
                className="mt-1"
              />
              <span>
                I understand that this is a pilot programme
                and agree to be contacted about my application
                and provide feedback if selected. *
              </span>
            </label>
          </section>

          {/* ERROR MESSAGE */}
          {error && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting
              ? "Submitting Application..."
              : "Apply to Join the Founding 50"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Your information will be used to review your
            application and contact you about the pilot.
          </p>

        </form>
      </div>
    </main>
  );
}
