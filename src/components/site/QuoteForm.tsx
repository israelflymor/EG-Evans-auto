import { useState, type FormEvent } from "react";
import { services } from "@/config/business";

type Props = {
  defaultVehicle?: string;
};

export function QuoteForm({ defaultVehicle = "" }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-brand-midnight text-brand-white p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-px left-0 right-0 h-px gradient-sunset" />
        <h3 className="font-display text-3xl mb-4">Request received.</h3>
        <p className="text-brand-white/60 max-w-md mx-auto">
          Thanks — we'll review the details and reach out to schedule your service. Connect Lovable Cloud to start delivering submissions to an inbox.
        </p>
      </div>
    );
  }

  const inputBase =
    "bg-brand-mist border-none ring-1 ring-black/10 px-4 py-3.5 text-sm focus:ring-brand-sunset focus:ring-2 outline-none transition w-full font-medium text-brand-midnight";
  const labelBase =
    "text-[10px] uppercase tracking-[0.2em] font-mono text-brand-midnight/55";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Full Name" labelClass={labelBase}>
        <input name="name" type="text" required className={inputBase} />
      </Field>
      <Field label="Phone" labelClass={labelBase}>
        <input name="phone" type="tel" required className={inputBase} />
      </Field>
      <Field label="Email" labelClass={labelBase}>
        <input name="email" type="email" required className={inputBase} />
      </Field>
      <Field label="Vehicle (Year / Make / Model)" labelClass={labelBase}>
        <input
          name="vehicle"
          type="text"
          defaultValue={defaultVehicle}
          placeholder="2021 Toyota Tacoma"
          className={inputBase}
        />
      </Field>
      <Field label="Service Needed" labelClass={labelBase} className="md:col-span-2">
        <select name="scope" className={`${inputBase} appearance-none`}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Other / Not sure</option>
        </select>
      </Field>
      <Field label="Describe the issue" labelClass={labelBase} className="md:col-span-2">
        <textarea name="message" rows={5} required className={inputBase} />
      </Field>
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="gradient-sunset text-brand-midnight font-display px-12 py-4 hover:brightness-110 transition active:scale-[0.98] text-base inline-flex items-center gap-2"
          style={{ boxShadow: "var(--shadow-sunset)" }}
        >
          Request Service
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  labelClass,
  children,
  className = "",
}: {
  label: string;
  labelClass: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}
