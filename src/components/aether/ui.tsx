import type { ReactNode } from "react";
import { PROPOSALS } from "@/lib/aether/model";

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function Block({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line py-8">
      <p className="font-mono text-xs text-brass">{kicker}</p>
      <h2 className="mt-1 text-xl font-semibold text-bone">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Metric({
  label,
  value,
  note,
  tone = "bone",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "bone" | "brass" | "stamp";
}) {
  const color = tone === "brass" ? "text-brass" : tone === "stamp" ? "text-stamp" : "text-bone";
  return (
    <div className="border border-line bg-panel px-3 py-3">
      <p className="text-xs text-mute">{label}</p>
      <p dir="ltr" className={cx("mt-1 text-right font-mono text-xl text-bone tabular-nums", color)}>
        {value}
      </p>
      {note ? <p className="mt-1 text-xs leading-5 text-faint">{note}</p> : null}
    </div>
  );
}

export function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: Array<{ key: string; cells: ReactNode[] }>;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[40rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line text-xs text-mute">
            {headers.map((header) => (
              <th key={header} scope="col" className="px-2 py-2 text-right font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b border-line">
              {row.cells.map((cell, index) => (
                <td
                  key={`${row.key}-${index}`}
                  dir={index === 0 ? "rtl" : "ltr"}
                  className={cx(
                    "px-2 py-2 text-right align-top text-bone",
                    index === 0 ? "" : "font-mono tabular-nums",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="border-s-2 border-brass ps-3 text-sm leading-6 text-mute">{children}</p>;
}

export function Toggle({
  on,
  label,
  detail,
  onClick,
}: {
  on: boolean;
  label: string;
  detail?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cx(
        "flex min-h-11 w-full flex-col gap-1 border px-3 py-3 text-right transition-colors duration-150",
        on ? "border-brass bg-panel" : "border-line bg-panel",
      )}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="text-sm font-medium text-bone">{label}</span>
        <span className={cx("shrink-0 font-mono text-xs", on ? "text-brass" : "text-stamp")}>
          {on ? "روشن" : "خاموش"}
        </span>
      </span>
      {detail ? <span className="text-xs leading-5 text-mute">{detail}</span> : null}
    </button>
  );
}

export function ScoreSlider({
  label,
  value,
  why,
  hint,
  onChange,
}: {
  label: string;
  value: number;
  why: string;
  hint?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block border-b border-line py-4">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-bone">{label}</span>
        <span dir="ltr" className="font-mono text-lg text-brass tabular-nums">
          {value}
        </span>
      </span>
      <input
        type="range"
        min={1}
        max={10}
        step={1}
        value={value}
        aria-label={label}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 w-full"
      />
      <span className="mt-2 block text-xs leading-5 text-mute">{why}</span>
      {hint !== undefined && hint !== value ? (
        <span className="mt-1 block font-mono text-xs text-faint">مدل با فرض‌های فعلی: {hint}</span>
      ) : null}
    </label>
  );
}

export function StackBar({
  parts,
}: {
  parts: Array<{ id: string; pct: number; tone: "stamp" | "brass" | "faint" }>;
}) {
  const toneClass = {
    stamp: "bg-stamp",
    brass: "bg-brass",
    faint: "bg-faint",
  };
  return (
    <div dir="ltr" className="flex h-3 w-full" aria-hidden="true">
      {parts.map((part) => (
        <div key={part.id} className={toneClass[part.tone]} style={{ width: `${part.pct}%` }} />
      ))}
    </div>
  );
}

export function VBars({ rows, max }: { rows: Array<{ label: string; value: number }>; max?: number }) {
  const peak = max ?? Math.max(...rows.map((row) => row.value), 1);
  return (
    <div dir="ltr" className="flex h-40 items-end gap-2">
      {rows.map((row) => (
        <div key={row.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
          <div
            className="bg-brass"
            style={{ height: `${Math.max(2, (row.value / peak) * 100)}%` }}
          />
          <span className="pt-2 text-center font-mono text-xs text-mute">{row.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Proposals() {
  return (
    <ol className="grid gap-3">
      {PROPOSALS.map((item) => (
        <li key={item.n} className="border border-line bg-panel px-4 py-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-bone">
              <span className="font-mono text-brass">{item.n}. </span>
              {item.title}
            </h3>
            <span className="font-mono text-xs text-stamp">{item.leverage}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-mute">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function MoneyField({
  label,
  value,
  onChange,
  allowNegative = false,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  allowNegative?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs text-mute">{label}</span>
      <input
        inputMode="decimal"
        value={value === 0 ? "" : String(value)}
        placeholder="خالی = صفر"
        onChange={(event) => {
          const raw = event.target.value.replace(/,/g, "").replace(/[^0-9.-]/g, "");
          if (raw === "" || raw === "-" || raw === ".") {
            onChange(0);
            return;
          }
          const n = Number(raw);
          if (!Number.isFinite(n)) return;
          onChange(allowNegative ? n : Math.max(0, n));
        }}
        className="mt-1 min-h-11 w-full border border-line bg-canvas px-3 font-mono text-sm text-bone outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
        dir="ltr"
      />
    </label>
  );
}
