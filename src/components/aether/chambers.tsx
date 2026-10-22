import { CHAMBERS, one, type Derived } from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";
import { Block, Note, ScoreSlider } from "@/components/aether/ui";

export function Chambers({ d }: { d: Derived }) {
  const chambers = useAether((s) => s.chambers);
  const setChamber = useAether((s) => s.setChamber);

  return (
    <div>
      <Block kicker="شاخص" title="همان سؤال‌هایی که نهاد جدی می‌پرسد">
        <Note>
          Chambers، ICC، LCIA، SIAC و HKIAC این‌جا لوگو نیستند. این فهرست چیزهایی است که قبل از سپردن اختلاف باید جواب داشته باشد. نمره پیش‌فرض یعنی مدرک ندیده‌ام. مدرک آمد، نمره را عوض کن و در CRM ذخیره کن.
        </Note>
        <p className="mt-4 font-mono text-sm text-brass">میانگین {one(d.chambersAvg)} از ۱۰</p>
        <div>
          {CHAMBERS.map((item) => (
            <ScoreSlider
              key={item.id}
              label={item.label}
              value={chambers[item.id] ?? item.score}
              why={item.why}
              onChange={(value) => setChamber(item.id, value)}
            />
          ))}
        </div>
      </Block>
    </div>
  );
}
