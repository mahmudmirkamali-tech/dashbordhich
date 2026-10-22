import { ACCEPTS, REFUSES, TESTS, type Derived } from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";
import { Block, Note, Toggle } from "@/components/aether/ui";

export function Wall({ d }: { d: Derived }) {
  const tests = useAether((s) => s.tests);
  const toggle = useAether((s) => s.toggleTest);
  const blocks = TESTS.filter((test) => test.kind === "block");
  const rest = TESTS.filter((test) => test.kind !== "block");

  return (
    <div>
      <Block kicker="دیوار" title={`${d.passedBlocks} از ${d.blockTotal} قفل ساختاری`}>
        <Note>
          حامی یعنی شخص دوم که می‌تواند به ابزار متن‌باز میزان گرنت بدهد، بدون کرسی، بدون سهم سود، بدون دست در فروش. این نقش با روشن کردن دکمه‌ها ساخته نمی‌شود. دکمه فقط یعنی سند قابل‌چک را داری و این دفتر حق دارد فرض را عوض کند.
        </Note>
        <div className="mt-4 grid gap-3">
          {blocks.map((test) => (
            <Toggle
              key={test.id}
              on={Boolean(tests[test.id])}
              label={test.title}
              detail={test.detail}
              onClick={() => toggle(test.id)}
            />
          ))}
        </div>
      </Block>

      <Block kicker="صداقت" title="دو بند که استقلال نیستند">
        <div className="grid gap-3">
          {rest.map((test) => (
            <Toggle
              key={test.id}
              on={Boolean(tests[test.id])}
              label={test.title}
              detail={test.detail}
              onClick={() => toggle(test.id)}
            />
          ))}
        </div>
        {!tests.lookthrough ? (
          <p className="mt-3 text-sm text-stamp">
            نگاه‌ازپشت خاموش است. ریسک ترکیبی عمداً بالا رفته. انکار صلاحیت نهاد ناظر، دیوار نمی‌سازد.
          </p>
        ) : null}
      </Block>

      <Block kicker="خط قرمز" title="کارهایی که این دفتر قبول نمی‌کند">
        <ul className="grid gap-2">
          {REFUSES.map((item) => (
            <li key={item} className="border-s-2 border-stamp ps-3 text-sm leading-6 text-mute">
              {item}
            </li>
          ))}
        </ul>
      </Block>

      <Block kicker="قابل امضا" title="چه چیزی نقش حامی را خوانا می‌کند">
        <ul className="grid gap-2">
          {ACCEPTS.map((item) => (
            <li key={item} className="border-s-2 border-brass ps-3 text-sm leading-6 text-mute">
              {item}
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
}
