import {
  CHAIN_ID,
  CHAIN_NAME,
  MARK,
  num,
  one,
  personLabel,
  SUPPLY,
  usd,
  verdictCopy,
  type Derived,
} from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";
import { Metric, Note, Proposals, StackBar } from "@/components/aether/ui";

export function Verdict({ d }: { d: Derived }) {
  const setTab = useAether((s) => s.setTab);
  const tone = d.passedBlocks === d.blockTotal ? "brass" : "stamp";
  return (
    <div className="grid gap-8">
      <div>
        <p className={tone === "stamp" ? "font-mono text-xs text-stamp" : "font-mono text-xs text-brass"}>
          {personLabel(d)} · دیوار {d.passedBlocks}/{d.blockTotal}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-bone">حکم صفر</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-mute">{verdictCopy(d)}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <article className="border border-line bg-panel p-4">
          <p className="font-mono text-xs text-brass">میزان</p>
          <h3 className="mt-2 text-lg font-semibold">اپ عملیات</h3>
          <dl className="mt-3 grid gap-2 text-sm">
            <div>
              <dt className="text-faint">درآمد مجاز</dt>
              <dd>کارمزد خدمت، scrutiny، اداره seat</dd>
            </div>
            <div>
              <dt className="text-faint">ممنوع</dt>
              <dd>فروش «هیچ»، بازارگردانی، وعده قیمت، سهم سود</dd>
            </div>
            <div>
              <dt className="text-faint">واقعیت امروز</dt>
              <dd>همین دفتر بک‌اند اوست. کنترل مشترک است.</dd>
            </div>
          </dl>
        </article>
        <div className="flex items-center justify-center md:flex-col">
          <p className="border border-stamp px-3 py-2 text-center font-mono text-xs text-stamp">
            {d.passedBlocks === d.blockTotal ? "دیوار روشن" : "دیوار رد شد"}
          </p>
        </div>
        <article className="border border-line bg-panel p-4">
          <p className="font-mono text-xs text-brass">هیچ</p>
          <h3 className="mt-2 text-lg font-semibold">دارایی مرتبط</h3>
          <dl className="mt-3 grid gap-2 text-sm">
            <div>
              <dt className="text-faint">نقش ادعا</dt>
              <dd>حامی افشاشده، نه مالک و نه ناشر</dd>
            </div>
            <div>
              <dt className="text-faint">نقش امروز</dt>
              <dd>ابزار همان کنترل، تا قفل‌ها سند شود</dd>
            </div>
            <div>
              <dt className="text-faint">زنجیره اعلامی</dt>
              <dd>
                {CHAIN_NAME} · {CHAIN_ID} · در این دفتر تأیید نشده
              </dd>
            </div>
          </dl>
        </article>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Metric label="سلامت" value={`${one(d.health)} / 10`} note="میانگین هفت بُعد" tone={d.health >= 7 ? "brass" : "stamp"} />
        <Metric label="ریسک ترکیبی" value={`${one(d.risk)} / 10`} note="سلامت، دیوار، چمبرز" tone="stamp" />
        <Metric label="وابستگی عملیاتی" value={`${one(d.dependence)} / 10`} note="۱۰ یعنی میزان بدون توکن نمی‌ایستد" tone="stamp" />
        <Metric label="کنترل ساختاری" value={`${one(d.control)}%`} note={d.assumptions.treasurySameSigners ? "با خزانه هم‌امضا" : "بدون خزانه"} tone="stamp" />
        <Metric label="شناور روز اول" value={num(d.floatTokens)} note={`عمومی ${num(d.publicFloat)} · داخلی ${num(d.insiderLiquid)}`} />
        <Metric label="عمق واقعی ۲٪" value={usd(Math.round(d.depth2.usd))} note="دلار لازم برای تکان ۲٪ قیمت علامت" tone="stamp" />
        <Metric label="باند فرود" value={`${num(d.runwayDays)} روز`} note={`نقد ${usd(d.cash)} از سقف ${usd(d.raise)}`} tone="stamp" />
        <Metric label="FDV اسمی" value={usd(d.fdv)} note={`علامت ${usd(MARK, 2)} × ${num(SUPPLY)}`} />
      </div>

      <div>
        <StackBar parts={d.bars} />
        <p className="mt-2 text-xs text-faint">
          سرخ = قابل فروش امروز. برنج = داخل استخر. خاکستری = خارج از دکمه فروش، نه لزوماً امن.
        </p>
      </div>

      <Note>
        الگوی قابل‌دفاع، TON بعد از خروج اپ است نه Gram سال ۲۰۲۰، و نه این تصور که ریپل با برچسب «مستقل» فروش مستقیم را سفید کرد. این دفتر تا سندها روشن نشود نقش حامی را امضا نمی‌کند.
      </Note>

      <div>
        <div className="mb-3 flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold">سه اهرم</h2>
          <button
            type="button"
            onClick={() => setTab("report")}
            className="min-h-11 border border-brass px-3 text-sm text-brass transition-colors duration-150 hover:bg-brass hover:text-canvas"
          >
            گزارش بساز
          </button>
        </div>
        <Proposals />
      </div>
    </div>
  );
}
