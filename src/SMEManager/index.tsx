
export default function SMEManager() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-semibold text-blue-700">
          GRANDEUR TECH PRESENTS
        </p>

        <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
          Know your numbers.
          <br />
          Run your business better.
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-600">
          SME Manager helps growing businesses organise
          their sales, expenses, inventory and customer
          records, so they can make better decisions.
        </p>

        <a
          href="/sme-manager/apply"
          className="inline-block rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white"
        >
          Join the Founding Pilot
        </a>
      </section>
    </main>
  );
}
