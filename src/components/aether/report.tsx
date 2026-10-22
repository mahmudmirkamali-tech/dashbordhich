import { useEffect, useState } from "react";
import {
  CHAMBERS,
  DIMENSIONS,
  DISCLAIMER,
  num,
  one,
  PROPOSALS,
  reportText,
  riskLines,
  SUPPLY,
  TESTS,
  usd,
  verdictCopy,
  type Derived,
} from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";

export function Report({ d }: { d: Derived }) {
  const dimensions = useAether((s) => s.dimensions);
  const chambers = useAether((s) => s.chambers);
  const tests = useAether((s) => s.tests);
  const assumptions = useAether((s) => s.assumptions);
  const revenue = useAether((s) => s.revenue);
  const earnings = useAether((s) => s.earnings);
  const [at, setAt] = useState("2026-10-22T00:00:00.000Z");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAt(new Date().toISOString());
  }, []);

  const text = reportText({ dimensions, chambers, tests, assumptions, revenue, earnings, at });
  const verdict =
    d.passedBlocks === d.blockTotal
      ? "قفل‌ها روشن است. نقش «هیچ» نسبت به میزان: حامی افشاشده. مصونیت ادعا نمی‌شود."
      : "جدایی ادعا شده، اثبات نشده.";

  return (
    <article className="mx-auto max-w-3xl bg-paper px-5 py-8 text-ink md:px-10">
      <div className="no-print flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            void navigator.clipboard.writeText(text).then(
              () => {
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              },
              () => setCopied(false),
            );
          }}
          className="min-h-11 border border-brass-ink px-3 text-sm text-brass-ink"
        >
          {copied ? "کپی شد" : "کپی متن"}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="min-h-11 border border-rule px-3 text-sm text-ink"
        >
          چاپ
        </button>
      </div>

      <header className="mt-6 border-b border-rule pb-4">
        <p className="font-mono text-xs text-brass-ink">MIZAN / AETHER</p>
        <h2 className="mt-2 text-2xl font-semibold">گزارش قابل ارسال</h2>
        <p className="mt-2 text-sm text-ink-soft">پرونده مرتبط: هیچ · طرف جدا، نه خود شرکت</p>
        <p className="mt-3 text-base font-semibold text-stamp-ink">{verdict}</p>
      </header>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">خلاصه اجرایی</h3>
        <p className="mt-2 text-sm leading-6">{verdictCopy(d)}</p>
      </section>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">اعداد کلیدی</h3>
        <PaperTable
          rows={[
            ["عرضه کل / سوخته", `${num(SUPPLY)} / ${num(d.burned)}`],
            ["شناور عمومی / داخلی بی‌قفل", `${num(d.publicFloat)} / ${num(d.insiderLiquid)}`],
            ["FDV / ارزش شناور بدترین", `${usd(d.fdv)} / ${usd(d.mcapFloat)}`],
            ["FDV به ارزش شناور", one(d.fdvToMcap)],
            ["TVL / FDV به TVL", `${usd(d.tvl)} / ${one(d.fdvToTvl)}`],
            ["عمق ۲٪", usd(Math.round(d.depth2.usd))],
            ["سقف فروش / نقد عملیاتی", `${usd(d.raise)} / ${usd(d.cash)}`],
            ["باند فرود", `${num(d.runwayDays)} روز`],
            ["کنترل ساختاری", `${one(d.control)}%`],
            ["P/S / P/E", `${d.ps === null ? "—" : one(d.ps)} / ${d.pe === null ? "—" : one(d.pe)}`],
          ]}
        />
      </section>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">نمره‌ها · ۱۰ یعنی سالم</h3>
        <PaperTable
          rows={[
            ...DIMENSIONS.map((item) => [item.label, `${dimensions[item.id] ?? "—"} / 10`]),
            ["میانگین سلامت", one(d.health)],
            ["ریسک ترکیبی", one(d.risk)],
          ]}
        />
      </section>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">شاخص حل اختلاف</h3>
        <PaperTable
          rows={[
            ...CHAMBERS.map((item) => [item.label, `${chambers[item.id] ?? "—"} / 10`]),
            ["میانگین", one(d.chambersAvg)],
          ]}
        />
      </section>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">دیوار</h3>
        <PaperTable
          rows={TESTS.map((test) => [test.title, tests[test.id] ? "روشن" : "خاموش"])}
        />
      </section>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">ریسک‌ها</h3>
        <ul className="mt-2 grid gap-2">
          {riskLines(d).map((line) => (
            <li key={line} className="border-s-2 border-stamp-ink ps-3 text-sm leading-6">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-brass-ink">سه پیشنهاد</h3>
        <ol className="mt-2 grid gap-4">
          {PROPOSALS.map((item) => (
            <li key={item.n}>
              <p className="text-sm font-semibold">
                {item.n}. {item.title}
                <span className="ms-2 font-mono text-xs font-normal text-stamp-ink">{item.leverage}</span>
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-8 border-t border-rule pt-4 text-xs leading-5 text-ink-soft">{DISCLAIMER}</p>
      <details className="mt-6">
        <summary className="min-h-11 cursor-pointer text-sm text-brass-ink">متن خام برای فوروارد</summary>
        <pre className="mt-2 overflow-x-auto font-mono text-xs leading-5 whitespace-pre-wrap text-ink">{text}</pre>
      </details>
    </article>
  );
}

function PaperTable({ rows }: { rows: string[][] }) {
  return (
    <table className="mt-2 w-full border-collapse text-sm">
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]} className="border-b border-rule">
            <th scope="row" className="py-2 pe-3 text-right font-normal text-ink-soft">
              {row[0]}
            </th>
            <td dir="ltr" className="py-2 text-left font-mono text-ink tabular-nums">
              {row[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
