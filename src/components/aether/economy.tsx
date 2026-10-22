import {
  BUCKETS,
  LP_TOKENS,
  LP_USD,
  MARK,
  num,
  one,
  px,
  SUPPLY,
  TIERS,
  usd,
  type Derived,
} from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";
import { Block, MoneyField, Note, Table, Toggle, VBars } from "@/components/aether/ui";

export function Economy({ d }: { d: Derived }) {
  const patch = useAether((s) => s.patchAssumptions);
  const revenue = useAether((s) => s.revenue);
  const earnings = useAether((s) => s.earnings);
  const setRevenue = useAether((s) => s.setRevenue);
  const setEarnings = useAether((s) => s.setEarnings);
  const a = d.assumptions;

  return (
    <div>
      <Block kicker="۰۱" title="فرض‌هایی که عدد را عوض می‌کنند">
        <div className="grid gap-3 md:grid-cols-2">
          <Toggle
            on={a.marketingLiquid}
            label="بازاریابی روز اول آزاد است"
            detail="خاموش = همان قفل استرس تیم، ۱۲ تا ۲۴ ماه"
            onClick={() => patch({ marketingLiquid: !a.marketingLiquid })}
          />
          <Toggle
            on={a.reserveLiquid}
            label="رزرو روز اول آزاد است"
            detail="خاموش = قفل ۱۲ تا ۲۴ ماه. پیش‌فرض طرح، خاموش نیست."
            onClick={() => patch({ reserveLiquid: !a.reserveLiquid })}
          />
          <Toggle
            on={a.treasurySameSigners}
            label="خزانه هم‌امضا با تیم میزان است"
            detail="روی کنترل ساختاری اثر دارد، روی شناور روز اول نه."
            onClick={() => patch({ treasurySameSigners: !a.treasurySameSigners })}
          />
          <Toggle
            on={a.lpFromRaise}
            label="پنج هزار دلار استخر از محل فروش می‌آید"
            detail="روشن یعنی نقد عملیاتی ۸٬۹۵۰ منهای ۵٬۰۰۰ است."
            onClick={() => patch({ lpFromRaise: !a.lpFromRaise })}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs text-mute">منحنی استیکینگ — در طرح اعلام نشده</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                { id: 0 as const, label: "خاموش" },
                { id: 36 as const, label: "۳۶ ماه" },
                { id: 48 as const, label: "۴۸ ماه" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={a.emissionMonths === item.id}
                  onClick={() => patch({ emissionMonths: item.id })}
                  className={
                    a.emissionMonths === item.id
                      ? "min-h-11 border border-brass bg-brass px-3 text-sm text-canvas"
                      : "min-h-11 border border-line px-3 text-sm text-bone"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <label className="block">
            <span className="text-xs text-mute">هزینه ماهانه فرضی عملیات</span>
            <input
              type="range"
              min={2000}
              max={40000}
              step={1000}
              value={a.burnMonthly}
              aria-label="هزینه ماهانه"
              onChange={(event) => patch({ burnMonthly: Number(event.target.value) })}
              className="mt-2 w-full"
            />
            <span dir="ltr" className="mt-1 block text-right font-mono text-sm text-brass">
              {usd(a.burnMonthly)}
            </span>
          </label>
        </div>
        <p className="mt-4 text-xs leading-5 text-faint">
          مدل استرس تیم: تا ماه ۱۲ صفر، در ماه ۱۲ نیمی، در ماه ۲۴ همه. شرکا: ماه ۶ نیمی، ماه ۱۲ همه. این بدبینانه است چون عبارت «۱۲ تا ۲۴ ماه» مبهم است.
        </p>
      </Block>

      <Block kicker="۰۲" title="عرضه">
        <Table
          headers={["قلم", "توکن", "سهم"]}
          rows={[
            { key: "supply", cells: ["عرضه کل", num(SUPPLY), "100%"] },
            { key: "public", cells: ["در گردش عمومی (فقط فروش)", num(d.publicFloat), `${one((d.publicFloat / SUPPLY) * 100)}%`] },
            { key: "insider", cells: ["در گردش داخلی بی‌قفل", num(d.insiderLiquid), `${one((d.insiderLiquid / SUPPLY) * 100)}%`] },
            { key: "lock", cells: ["قفل‌شده، به‌جز خزانه", num(d.lockedContract), `${one((d.lockedContract / SUPPLY) * 100)}%`] },
            { key: "treasury", cells: ["خزانه، خارج از برنامه آزادسازی", num(2_000_000), "20%"] },
            { key: "burn", cells: ["سوخته", num(d.burned), "0%"] },
          ]}
        />
        <div className="mt-6">
          <Table
            headers={["سطل", "توکن", "درصد", "قفل اعلام‌شده", "نهنگ؟"]}
            rows={BUCKETS.map((bucket) => ({
              key: bucket.id,
              cells: [
                bucket.name,
                num(bucket.tokens),
                `${one((bucket.tokens / SUPPLY) * 100)}%`,
                bucket.lock,
                bucket.tokens > SUPPLY * 0.01 ? "بله، بیش از ۱٪" : "نه",
              ],
            }))}
          />
        </div>
        <p className="mt-3 text-xs leading-5 text-faint">
          شش سطل بالای آستانه یک درصدند. اگر کلید انتشار استیکینگ هم دست همان تیم باشد، کنترل عملی به نزدیک کل عرضه می‌رسد. آن را داخل {one(d.control)}٪ نیاوردم چون کلیدی افشا نشده.
        </p>
      </Block>

      <Block kicker="۰۳" title="قیمت، ارزش، حجم">
        <Table
          headers={["قلم", "مقدار", "معنی"]}
          rows={[
            { key: "mark", cells: ["قیمت علامت", usd(MARK, 2), `${usd(LP_USD)} در برابر ${num(LP_TOKENS)} توکن استخر`] },
            { key: "ath", cells: ["ATH", "—", "معامله‌ای ثبت نشده"] },
            { key: "atl", cells: ["ATL", "—", "معامله‌ای ثبت نشده"] },
            { key: "v24", cells: ["حجم ۲۴ ساعت", "—", "بازار وجود ندارد"] },
            { key: "v7", cells: ["حجم ۷ روز", "—", "بازار وجود ندارد"] },
            { key: "mcapf", cells: ["ارزش شناور بدترین حالت", usd(d.mcapFloat), "شناور روز اول ضربدر ۰٫۱۰"] },
            { key: "mcapp", cells: ["ارزش شناور عمومی", usd(d.mcapPublic), "فقط ۱۰۰٬۰۰۰ توکن فروش"] },
            { key: "fdv", cells: ["FDV", usd(d.fdv), "برچسب. بازار هنوز رأی نداده"] },
            { key: "ratio", cells: ["FDV / ارزش شناور", one(d.fdvToMcap), "قفل کردن رزرو این نسبت را بزرگ‌تر و dump را کوچک‌تر می‌کند"] },
          ]}
        />
        <div className="mt-4">
          <Note>
            نسبت FDV به ارزش بازار را پرستش نکن. قفل داخلی‌ها صورت کسر را ثابت و مخرج را کوچک می‌کند. عدد زشت‌تر می‌شود و خطر فروش کمتر. عمق و شناور قابل‌فروش را ببین.
          </Note>
        </div>
      </Block>

      <Block kicker="۰۴" title="فروش عمومی">
        <Table
          headers={["پله", "توکن", "قیمت", "جمع"]}
          rows={[
            ...TIERS.map((tier) => ({
              key: tier.name,
              cells: [tier.name, num(tier.tokens), px(tier.milli), usd((tier.tokens * tier.milli) / 1000)],
            })),
            { key: "sum", cells: ["سقف", num(100_000), "—", usd(d.raise)] },
          ]}
        />
      </Block>

      <Block kicker="۰۵" title="TVL و ضریب‌ها">
        <Table
          headers={["قلم", "مقدار"]}
          rows={[
            { key: "tvl", cells: ["TVL استخر (دو طرف)", usd(d.tvl)] },
            { key: "mt", cells: ["ارزش شناور / TVL", one(d.mcapToTvl)] },
            { key: "ft", cells: ["FDV / TVL", one(d.fdvToTvl)] },
            { key: "ps", cells: ["P/S روی ارزش شناور", d.ps === null ? "تعریف‌نشده — درآمد صفر" : one(d.ps)] },
            { key: "pe", cells: ["P/E روی ارزش شناور", d.pe === null ? "تعریف‌نشده — سود افشا نشده" : one(d.pe)] },
          ]}
        />
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <MoneyField label="درآمد سالانه خدمت، دلار" value={revenue} onChange={setRevenue} />
          <MoneyField label="سود سالانه، دلار" value={earnings} onChange={setEarnings} allowNegative />
        </div>
        {earnings < 0 ? (
          <p className="mt-3 text-xs text-stamp">زیان ثبت شده. ضریب سود عمداً ساخته نمی‌شود.</p>
        ) : null}
      </Block>

      <Block kicker="۰۶" title="عمق واقعی">
        <Table
          headers={["سناریو", "توکن", "دلار خارج‌شده", "قیمت بعد", "افت"]}
          rows={[
            {
              key: "2",
              cells: ["تا افت ۲٪ قیمت علامت", num(Math.round(d.depth2.tokens)), usd(d.depth2.usd, 0), usd(d.depth2.newPrice, 3), `${one(d.depth2.drop * 100)}%`],
            },
            {
              key: "10",
              cells: ["تا افت ۱۰٪", num(Math.round(d.depth10.tokens)), usd(d.depth10.usd, 0), usd(d.depth10.newPrice, 3), `${one(d.depth10.drop * 100)}%`],
            },
            {
              key: "20",
              cells: ["تا افت ۲۰٪", num(Math.round(d.depth20.tokens)), usd(d.depth20.usd, 0), usd(d.depth20.newPrice, 3), `${one(d.depth20.drop * 100)}%`],
            },
            {
              key: "ico",
              cells: ["فروش کل عرضه عمومی", num(100_000), usd(d.sellPublic.usdOut, 0), usd(d.sellPublic.newPrice, 3), `${one(d.sellPublic.drop * 100)}%`],
            },
            {
              key: "res",
              cells: ["فروش ۱۰٪ رزرو", num(235_000), usd(d.sellReserveSlice.usdOut, 0), usd(d.sellReserveSlice.newPrice, 4), `${one(d.sellReserveSlice.drop * 100)}%`],
            },
            {
              key: "lp",
              cells: ["برداشت کامل استخر در ماه ۶", num(LP_TOKENS), usd(LP_USD), "بازار تمام", "—"],
            },
          ]}
        />
        <p className="mt-3 text-xs leading-5 text-faint">
          مدل، استخر حاصل‌ضرب ثابت است با ۵۰٬۰۰۰ توکن و ۵٬۰۰۰ دلار. کارمزد و مسیر چنداستخره را ندارم چون وجود ندارند. Chain ID 505 ایندکسر قابل اتکایی در این دفتر ندارد؛ قیمت ساختگی نمی‌سازم.
        </p>
      </Block>

      <Block kicker="۰۷" title="فشار فروش — ماه ۰ تا ۲۴">
        <VBars
          rows={d.schedule.map((row) => ({
            label: String(row.month),
            value: row.float,
          }))}
        />
        <div className="mt-4">
          <Table
            headers={["ماه", "شناور تجمعی", "جدید", "داخلی", "استیکینگ آزادشده", "استخر", "ارزش اسمی روی ۰٫۱۰"]}
            rows={d.schedule.map((row) => ({
              key: String(row.month),
              cells: [
                String(row.month),
                num(Math.round(row.float)),
                num(Math.round(row.added)),
                num(Math.round(row.insider)),
                num(Math.round(row.staking)),
                row.lpOpen ? "قابل تخلیه" : "قفل",
                usd(Math.round(row.notional)),
              ],
            }))}
          />
        </div>
        <p className="mt-3 text-xs leading-5 text-faint">
          ارزش اسمی در ماه‌های بعد دروغ راحت است. همان فروش عمومی، قیمت علامت را حدود {one(d.sellPublic.drop * 100)}٪ پایین می‌آورد. ستون دلار را به‌عنوان سقف خیالی بخوان، نه پیش‌بینی.
        </p>
      </Block>

      <Block kicker="۰۸" title="تورم، سوخت، سرعت، باند فرود">
        <Table
          headers={["قلم", "مقدار", "خوانش"]}
          rows={[
            { key: "burn", cells: ["نرخ سوزاندن توکن", "۰", "مکانیزمی اعلام نشده"] },
            {
              key: "inf",
              cells: [
                "تورم سالانه عرضه",
                d.inflationAnnual === 0 ? "۰٪ اعلام‌شده" : `${one(d.inflationAnnual)}%`,
                d.assumptions.emissionMonths === 0 ? "منحنی خاموش فرض شده چون وجود ندارد" : "فقط اگر انتشار خطی واقعاً تصویب شود",
              ],
            },
            { key: "vel", cells: ["Velocity", "—", "حجم تقسیم بر ارزش. حجم صفر است"] },
            { key: "cash", cells: ["نقد بعد از استخر", usd(d.cash), a.lpFromRaise ? "فروش منهای ۵٬۰۰۰ دلار" : "استخر از جیب جدا فرض شد"] },
            { key: "run", cells: ["باند فرود", `${num(d.runwayDays)} روز`, `هزینه ماهانه ${usd(a.burnMonthly)}`] },
          ]}
        />
      </Block>
    </div>
  );
}
