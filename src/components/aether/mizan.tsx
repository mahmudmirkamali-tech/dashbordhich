import { one, PRECEDENTS, type Derived } from "@/lib/aether/model";
import { Block, Metric, Note, Table } from "@/components/aether/ui";

export function Mizan({ d }: { d: Derived }) {
  return (
    <div>
      <Block kicker="شخص اول" title="میزان چه هست و چه نیست">
        <div className="grid gap-3 md:grid-cols-2">
          <article className="border border-line bg-panel p-4">
            <h3 className="text-base font-semibold text-brass">هست</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-mute">
              <li>دفتر عملیات کیفیت رأی: تخصص، پاسخ، نیمکت، آگاهی تجاری، بی‌طرفی، اجرا، سرعت، ثبات خروجی، شفافیت، رویه.</li>
              <li>فروشنده خدمت. واحد پول رابطه‌اش با مشتری فاکتور است، نه شمع قیمت.</li>
              <li>اگر دیوار واقعی شود، می‌تواند گیرنده گرنت ابزار متن‌باز باشد. گیرنده گرنت مالک گرنت‌دهنده نیست.</li>
            </ul>
          </article>
          <article className="border border-line bg-panel p-4">
            <h3 className="text-base font-semibold text-stamp">نیست</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-mute">
              <li>ناشر «هیچ»، بازارگردان «هیچ»، یا قول‌دهنده قیمت «هیچ».</li>
              <li>شریکی که سود پرونده را به دارنده توکن پاس بدهد. آن پاس، دیوار را برمی‌دارد.</li>
              <li>یک شخص با دو نام. امروز، تا قفل‌ها سند شود، دقیقاً همین است.</li>
            </ul>
          </article>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Metric label="وابستگی به «هیچ»" value={`${one(d.dependence)} / 10`} note="هدف مدل: زیر ۳، یعنی فاکتور بدون توکن" tone="stamp" />
          <Metric label="دیوار" value={`${d.passedBlocks} / ${d.blockTotal}`} note="زیر ۸، سازمان بورس حق دارد یکی ببیند" tone="stamp" />
        </div>
      </Block>

      <Block kicker="خوانش" title="طرفدار، نه دوقلو">
        <Note>
          خوانشی که این دفتر حاضر است بنویسد: میزان خدمات می‌فروشد. «هیچ» فقط اگر شخص، امضا، عواید و سودش جدا باشد می‌تواند حامی مالی ابزار متن‌باز باشد. خوانشی که این دفتر نمی‌نویسد: چون دو اسم دارید، سازمان بورس و اوراق بهادار یکی نمی‌بیند.
        </Note>
        <p className="mt-4 text-sm leading-6 text-mute">
          تلگرام و TON را مردم به هم می‌شناسند، ولی نقطه‌ای که شبکه ماند بعد از این بود که اپ دیگر ناشر نبود. ریپل و XRP را هم کنار هم می‌خوانند، و همان نزدیکی در فروش مستقیم نهادی به نفع شرکت تمام نشد. نزدیکی برند مشکل نیست. یکی بودنِ فروش، کنترل و عواید مشکل است. این دفتر بک‌اند میزان است و جدول «هیچ» را همان‌جا نشان می‌دهد دقیقاً تا این نزدیکی پنهان نشود. پنهان‌کاری، دفاع نیست.
        </p>
      </Block>

      <Block kicker="پرونده‌های علنی" title="سه الگو، بدون افسانه">
        <Table
          headers={["پرونده", "ساختار", "نتیجه", "برای این دو"]}
          rows={PRECEDENTS.map((row) => ({
            key: row.case,
            cells: [row.case, row.fact, row.result, row.lesson],
          }))}
        />
        <p className="mt-3 text-xs leading-5 text-faint">
          این‌ها درس پرونده‌های علنی‌اند، نه پیش‌بینی رأی سازمان بورس. قانون ایران را این جدول عوض نمی‌کند.
        </p>
      </Block>

      <Block kicker="محصول" title="لبه، اگر توکن غایب بماند">
        <p className="text-sm leading-6 text-mute">
          شاخص‌های الگوی Chambers، ICC، LCIA، SIAC و HKIAC برای میزان محصول‌اند: موکل جدی قبل از سپردن پرونده همین‌ها را می‌پرسد. امروز شواهدشان نیست، برای همین نمره‌ها پایین است. اگر میزان همان پرسش‌نامه را روی پرونده واقعی، با نیمکت واقعی و scrutiny واقعی بفروشد، دلیل وجود دارد. اگر دلیل وجود، نمودار قیمت باشد، میزان یک پوسته برای عرضه است و دفتر همین را خواهد نوشت.
        </p>
      </Block>
    </div>
  );
}
