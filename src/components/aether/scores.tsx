import { DIMENSIONS, one, type Derived } from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";
import { Block, Note, ScoreSlider } from "@/components/aether/ui";

export function Scores({ d }: { d: Derived }) {
  const dimensions = useAether((s) => s.dimensions);
  const setDimension = useAether((s) => s.setDimension);
  const applyHints = useAether((s) => s.applyHints);

  return (
    <div>
      <Block kicker="بی‌رحم" title="هفت بُعد، از ۱ تا ۱۰">
        <Note>
          ۱۰ یعنی سالم، نه یعنی «ریسک زیاد». مقاومت در برابر dump اگر ۲ باشد یعنی dump آسان است. نمره مال تحلیل است. مدل فقط سه تایش را با فرض قفل عوض می‌کند و تا خودت نخواهی روی نمره دست نمی‌گذارد.
        </Note>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-sm text-brass">سلامت {one(d.health)} · ریسک {one(d.risk)}</p>
          <button
            type="button"
            onClick={applyHints}
            className="min-h-11 border border-brass px-3 text-sm text-brass transition-colors duration-150 hover:bg-brass hover:text-canvas"
          >
            سه نمره حساس را با مدل هم‌تراز کن
          </button>
        </div>
        <div>
          {DIMENSIONS.map((item) => (
            <ScoreSlider
              key={item.id}
              label={item.label}
              value={dimensions[item.id] ?? item.score}
              why={item.why}
              hint={d.hints[item.id]}
              onChange={(value) => setDimension(item.id, value)}
            />
          ))}
        </div>
      </Block>
    </div>
  );
}
