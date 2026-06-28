import { useState, type FormEvent } from "react";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-brand-dark text-brand-white p-12 text-center">
        <h3 className="font-heading text-2xl mb-3">Request received.</h3>
        <p className="text-brand-white/70 max-w-md mx-auto">
          Thanks — we'll review the details and reach out to schedule your service. (Connect Lovable Cloud to start delivering submissions to an inbox.)
        </p>
      </div>
    );
  }

  const inputBase =
    "bg-white border-none ring-1 ring-black/10 p-4 text-sm focus:ring-brand-accent focus:ring-2 outline-none transition-shadow w-full";
  const labelBase =
    "text-[10px] uppercase tracking-widest font-bold text-zinc-500";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelBase}>Full Name</label>
        <input id="name" name="name" type="text" required className={inputBase} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelBase}>Phone</label>
        <input id="phone" name="phone" type="tel" required className={inputBase} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelBase}>Email</label>
        <input id="email" name="email" type="email" required className={inputBase} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="vehicle" className={labelBase}>Vehicle (Year / Make / Model)</label>
        <input id="vehicle" name="vehicle" type="text" placeholder="2018 Toyota Tacoma" className={inputBase} />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="scope" className={labelBase}>Service Needed</label>
        <select id="scope" name="scope" className={`${inputBase} appearance-none`}>
          <option>General Diagnostic</option>
          <option>Oil Change & Maintenance</option>
          <option>Brakes & Suspension</option>
          <option>Engine Repair</option>
          <option>Transmission</option>
          <option>Heating & A/C</option>
          <option>Electrical / Battery</option>
          <option>Pre-Purchase Inspection</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className={labelBase}>Describe the issue</label>
        <textarea id="message" name="message" rows={4} required className={inputBase} />
      </div>
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-brand-accent text-brand-dark font-heading px-12 py-4 hover:bg-brand-accent/90 transition-colors active:scale-[0.98] uppercase tracking-widest text-sm"
        >
          Request Service
        </button>
      </div>
    </form>
  );
}
