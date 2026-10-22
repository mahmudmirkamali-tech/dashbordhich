import { useEffect, useState } from "react";
import { DISCLAIMER, personLabel, TABS, type TabId } from "@/lib/aether/model";
import { useAether, useDerived } from "@/lib/aether/store";
import { Chambers } from "@/components/aether/chambers";
import { Crm } from "@/components/aether/crm";
import { Economy } from "@/components/aether/economy";
import { Mizan } from "@/components/aether/mizan";
import { Report } from "@/components/aether/report";
import { Scores } from "@/components/aether/scores";
import { cx } from "@/components/aether/ui";
import { Verdict } from "@/components/aether/verdict";
import { Wall } from "@/components/aether/wall";

export function Shell() {
  const tab = useAether((s) => s.tab);
  const setTab = useAether((s) => s.setTab);
  const d = useDerived();
  const [cmd, setCmd] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    void useAether.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-bone">
      <header className="no-print border-b border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-widest text-brass">MIZAN / AETHER</p>
              <h1 className="mt-1 text-2xl font-semibold">دفتر میزان</h1>
              <p className="mt-1 max-w-xl text-sm leading-6 text-mute">
                پرونده مرتبط: «هیچ». طرف جدا، نه خود شرکت. زنجیره اعلامی DotOne، شناسه ۵۰۵.
              </p>
            </div>
            <div
              className={cx(
                "border px-3 py-2",
                d.passedBlocks === d.blockTotal ? "border-brass text-brass" : "border-stamp text-stamp",
              )}
            >
              <p className="font-mono text-xs">حکم جاری</p>
              <p className="text-sm font-semibold">{personLabel(d)}</p>
            </div>
          </div>

          <form
            className="flex border border-line bg-panel"
            onSubmit={(event) => {
              event.preventDefault();
              if (cmd.includes("گزارش")) {
                setTab("report");
                setHint("");
                setCmd("");
                return;
              }
              setHint("یک دستور: گزارش بساز");
            }}
          >
            <input
              value={cmd}
              onChange={(event) => setCmd(event.target.value)}
              placeholder="بنویس: گزارش بساز"
              aria-label="دستور"
              className="min-h-11 min-w-0 flex-1 bg-transparent px-3 text-sm text-bone outline-none"
            />
            <button type="submit" className="min-h-11 px-4 text-sm text-brass">
              اجرا
            </button>
          </form>
          {hint ? <p className="text-xs text-stamp">{hint}</p> : null}

          <nav className="flex gap-2 overflow-x-auto" aria-label="بخش‌ها">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id as TabId)}
                className={cx(
                  "min-h-11 shrink-0 px-3 text-sm transition-colors duration-150",
                  tab === item.id ? "bg-brass text-canvas" : "border border-line text-mute",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <p
        className={cx(
          "no-print border-b border-line px-4 py-3 text-sm md:px-6",
          d.passedBlocks === d.blockTotal ? "text-brass" : "text-stamp",
        )}
      >
        {d.passedBlocks === d.blockTotal
          ? "قفل‌ها روشن است. نقش قابل‌نوشتن: حامی افشاشده. این هنوز مصونیت نظارتی نیست."
          : "نگاه‌ازپشت باز است. تا هشت قفل سند نشود، سازمان بورس می‌تواند میزان و «هیچ» را یک عرضه ببیند."}
      </p>

      <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
        {tab === "verdict" ? <Verdict d={d} /> : null}
        {tab === "economy" ? <Economy d={d} /> : null}
        {tab === "wall" ? <Wall d={d} /> : null}
        {tab === "mizan" ? <Mizan d={d} /> : null}
        {tab === "chambers" ? <Chambers d={d} /> : null}
        {tab === "scores" ? <Scores d={d} /> : null}
        {tab === "crm" ? <Crm /> : null}
        {tab === "report" ? <Report d={d} /> : null}
      </main>

      <footer className="no-print mx-auto w-full max-w-6xl px-4 pb-10 text-xs leading-5 text-faint md:px-6">
        {DISCLAIMER}
      </footer>
    </div>
  );
}
