import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  partFinderYears,
  partFinderMakes,
  partFinderModels,
} from "@/config/business";

type Props = {
  variant?: "hero" | "inline";
};

export function PartFinder({ variant = "hero" }: Props) {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const models = useMemo(
    () => (make ? partFinderModels[make] ?? [] : []),
    [make],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const vehicle = [year, make, model].filter(Boolean).join(" ");
    void navigate({
      to: "/contact",
      search: { vehicle: vehicle || undefined } as never,
    });
  }

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={onSubmit}
      className={
        isHero
          ? "relative bg-brand-white/95 backdrop-blur-xl ring-1 ring-brand-white/40 shadow-luxe p-6 md:p-7"
          : "bg-brand-white ring-1 ring-black/10 p-6"
      }
      style={isHero ? { boxShadow: "var(--shadow-luxe)" } : undefined}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-brand-sunset animate-pulse" />
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-midnight/70">
            Part &amp; Service Finder
          </p>
        </div>
        <p className="hidden md:block font-mono text-[10px] tracking-widest text-brand-midnight/40 uppercase">
          Step 1 of 1
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3">
        <Select
          label="Year"
          value={year}
          onChange={setYear}
          options={partFinderYears.map(String)}
          placeholder="Select"
        />
        <Select
          label="Make"
          value={make}
          onChange={(v) => {
            setMake(v);
            setModel("");
          }}
          options={[...partFinderMakes]}
          placeholder="Select"
        />
        <Select
          label="Model"
          value={model}
          onChange={setModel}
          options={models.length ? [...models] : ["Other / Not Listed"]}
          placeholder={make ? "Select" : "Pick make first"}
          disabled={!make}
        />
        <button
          type="submit"
          className="self-end h-[52px] gradient-sunset text-brand-midnight font-display text-base tracking-tight px-7 hover:brightness-110 transition active:scale-[0.98] inline-flex items-center justify-center gap-2"
          style={{ boxShadow: "var(--shadow-sunset)" }}
        >
          Find My Fit
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-[11px] text-brand-midnight/55 font-mono tracking-wide">
        Fits 90% of US-market vehicles · Not listed? Tell us in the form.
      </p>
    </form>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  disabled?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-midnight/55">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="appearance-none w-full h-[52px] bg-brand-mist border-none ring-1 ring-black/10 px-4 pr-10 text-sm font-medium text-brand-midnight focus:ring-2 focus:ring-brand-sunset outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">{placeholder ?? "Select"}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-midnight/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </label>
  );
}
