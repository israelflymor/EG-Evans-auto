import { useState, type FormEvent } from "react";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired yet. Acknowledge locally so the form has a working state.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-brand-dark text-brand-white p-12 text-center">
        <h3 className="font-heading text-2xl font-semibold mb-3">Inquiry received.</h3>
        <p className="text-brand-white/70 max-w-md mx-auto">
          Thanks — we'll review your project details and get back to you. (Connect Lovable Cloud to start delivering submissions to an inbox.)
        </p>
      </div>
    );
  }

  const inputBase =
    "bg-zinc-100 border-none ring-1 ring-black/5 p-4 text-sm focus:ring-brand-accent focus:ring-2 outline-none transition-shadow w-full";
  const labelBase =
    "text-[10px] uppercase tracking-widest font-bold text-zinc-400";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelBase}>Full Name</label>
        <input id="name" name="name" type="text" required className={inputBase} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelBase}>Email Address</label>
        <input id="email" name="email" type="email" required className={inputBase} />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="scope" className={labelBase}>Project Scope</label>
        <select id="scope" name="scope" className={`${inputBase} appearance-none`}>
          <option>Residential Installation</option>
          <option>Residential Repair</option>
          <option>Commercial Maintenance</option>
          <option>Emergency Service</option>
          <option>Water Heater / Boiler</option>
          <option>Full-Scale Repiping</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className={labelBase}>Message</label>
        <textarea id="message" name="message" rows={4} required className={inputBase} />
      </div>
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-brand-dark text-brand-white font-heading font-semibold px-12 py-4 hover:bg-brand-mid transition-colors active:scale-[0.98]"
        >
          SUBMIT INQUIRY
        </button>
      </div>
    </form>
  );
}
