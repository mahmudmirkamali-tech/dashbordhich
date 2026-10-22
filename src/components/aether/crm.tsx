import { useState } from "react";
import { CHAMBERS, DIMENSIONS, num, one, when } from "@/lib/aether/model";
import { useAether } from "@/lib/aether/store";
import { Block, Note, VBars } from "@/components/aether/ui";

export function Crm() {
  const snapshots = useAether((s) => s.snapshots);
  const draftLabel = useAether((s) => s.draftLabel);
  const draftNote = useAether((s) => s.draftNote);
  const setDraftLabel = useAether((s) => s.setDraftLabel);
  const setDraftNote = useAether((s) => s.setDraftNote);
  const saveSnapshot = useAether((s) => s.saveSnapshot);
  const deleteSnapshot = useAether((s) => s.deleteSnapshot);
  const resetScores = useAether((s) => s.resetScores);
  const [open, setOpen] = useState("");

  return (
    <div>
      <Block kicker="CRM" title="روند حکم‌ها">
        <Note>
          هر ذخیره، نمره‌ها، قفل‌های دیوار، فرض‌ها و ریسک همان لحظه را نگه می‌دارد. داده روی همین مرورگر می‌ماند. ارزیابی حقوقی را جهان‌نویس نمی‌کنم.
        </Note>
        <div className="mt-4 grid gap-3">
          <label className="block">
            <span className="text-xs text-mute">عنوان حکم</span>
            <input
              value={draftLabel}
              onChange={(event) => setDraftLabel(event.target.value)}
              placeholder="مثلاً بعد از قفل رزرو"
              className="mt-1 min-h-11 w-full border border-line bg-panel px-3 text-sm text-bone outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            />
          </label>
          <label className="block">
            <span className="text-xs text-mute">یادداشت تغییر</span>
            <textarea
              value={draftNote}
              onChange={(event) => setDraftNote(event.target.value)}
              rows={3}
              placeholder="چه چیزی نسبت به حکم قبلی عوض شد؟"
              className="mt-1 w-full border border-line bg-panel px-3 py-3 text-sm leading-6 text-bone outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={saveSnapshot}
              className="min-h-11 bg-brass px-4 text-sm font-medium text-canvas"
            >
              ذخیره حکم
            </button>
            <button
              type="button"
              onClick={resetScores}
              className="min-h-11 border border-line px-4 text-sm text-bone"
            >
              برگرداندن نمره‌ها به صفر
            </button>
          </div>
        </div>
      </Block>

      <Block kicker="روند" title="سلامت در گذر حکم‌ها">
        {snapshots.length < 2 ? (
          <p className="text-sm text-mute">یک مبدأ هست. حکم بعدی که ذخیره شود، شیب دیده می‌شود.</p>
        ) : null}
        <div className="mt-4">
          <VBars
            max={10}
            rows={snapshots.map((snap, index) => ({
              label: String(index),
              value: snap.health,
            }))}
          />
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-xs text-mute">
                {["زمان", "عنوان", "سلامت", "ریسک", "دیوار", "شناور", "عمل"].map((header) => (
                  <th key={header} scope="col" className="px-2 py-2 text-right font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {snapshots.map((snap) => (
                <tr key={snap.id} className="border-b border-line align-top">
                  <td className="px-2 py-3 font-mono text-xs text-faint" dir="ltr">
                    {when(snap.at)}
                  </td>
                  <td className="px-2 py-3">
                    <button
                      type="button"
                      className="min-h-11 text-right text-bone"
                      aria-expanded={open === snap.id}
                      onClick={() => setOpen(open === snap.id ? "" : snap.id)}
                    >
                      {snap.label}
                    </button>
                    {snap.note ? <p className="mt-1 text-xs leading-5 text-mute">{snap.note}</p> : null}
                    {open === snap.id ? (
                      <div className="mt-3 grid gap-3 md:grid-cols-2">
                        <ul className="grid gap-1 text-xs text-mute">
                          {DIMENSIONS.map((item) => (
                            <li key={item.id} className="flex justify-between gap-3">
                              <span>{item.label}</span>
                              <span className="font-mono text-bone">{snap.dimensions[item.id]}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="grid gap-1 text-xs text-mute">
                          {CHAMBERS.map((item) => (
                            <li key={item.id} className="flex justify-between gap-3">
                              <span>{item.label}</span>
                              <span className="font-mono text-bone">{snap.chambers[item.id]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </td>
                  <td className="px-2 py-3 font-mono tabular-nums" dir="ltr">
                    {one(snap.health)}
                  </td>
                  <td className="px-2 py-3 font-mono text-stamp tabular-nums" dir="ltr">
                    {one(snap.risk)}
                  </td>
                  <td className="px-2 py-3 font-mono tabular-nums" dir="ltr">
                    {snap.passedBlocks}/8
                  </td>
                  <td className="px-2 py-3 font-mono tabular-nums" dir="ltr">
                    {num(Math.round(snap.floatTokens))}
                  </td>
                  <td className="px-2 py-3">
                    <button
                      type="button"
                      disabled={snap.id === "seed-zero"}
                      onClick={() => deleteSnapshot(snap.id)}
                      className="min-h-11 px-2 text-xs text-faint disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {snap.id === "seed-zero" ? "مبدأ" : "حذف"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>
    </div>
  );
}
