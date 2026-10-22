import { useMemo } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import {
  defaultAssumptions,
  defaultChambers,
  defaultDimensions,
  defaultTests,
  derive,
  hints,
  seedSnapshot,
  type Assumptions,
  type Snapshot,
  type TabId,
} from "@/lib/aether/model";

type MemoryStorage = {
  getItem: (name: string) => string | null;
  setItem: (name: string, value: string) => void;
  removeItem: (name: string) => void;
};

const memory = new Map<string, string>();

function storage(): MemoryStorage {
  if (typeof window === "undefined") {
    return {
      getItem: (name) => memory.get(name) ?? null,
      setItem: (name, value) => {
        memory.set(name, value);
      },
      removeItem: (name) => {
        memory.delete(name);
      },
    };
  }
  return localStorage;
}

function clampScore(n: number): number {
  return Math.min(10, Math.max(1, Math.round(n)));
}

type AetherState = {
  tab: TabId;
  setTab: (tab: TabId) => void;
  tests: Record<string, boolean>;
  toggleTest: (id: string) => void;
  dimensions: Record<string, number>;
  setDimension: (id: string, value: number) => void;
  chambers: Record<string, number>;
  setChamber: (id: string, value: number) => void;
  assumptions: Assumptions;
  patchAssumptions: (patch: Partial<Assumptions>) => void;
  revenue: number;
  earnings: number;
  setRevenue: (n: number) => void;
  setEarnings: (n: number) => void;
  snapshots: Snapshot[];
  draftLabel: string;
  draftNote: string;
  setDraftLabel: (v: string) => void;
  setDraftNote: (v: string) => void;
  saveSnapshot: () => void;
  deleteSnapshot: (id: string) => void;
  applyHints: () => void;
  resetScores: () => void;
};

export const useAether = create<AetherState>()(
  persist(
    (set, get) => ({
      tab: "verdict",
      setTab: (tab) => set({ tab }),
      tests: defaultTests(),
      toggleTest: (id) =>
        set((s) => ({ tests: { ...s.tests, [id]: !s.tests[id] } })),
      dimensions: defaultDimensions(),
      setDimension: (id, value) =>
        set((s) => ({ dimensions: { ...s.dimensions, [id]: clampScore(value) } })),
      chambers: defaultChambers(),
      setChamber: (id, value) =>
        set((s) => ({ chambers: { ...s.chambers, [id]: clampScore(value) } })),
      assumptions: defaultAssumptions(),
      patchAssumptions: (patch) =>
        set((s) => ({ assumptions: { ...s.assumptions, ...patch } })),
      revenue: 0,
      earnings: 0,
      setRevenue: (n) => set({ revenue: Number.isFinite(n) ? Math.max(0, n) : 0 }),
      setEarnings: (n) => set({ earnings: Number.isFinite(n) ? n : 0 }),
      snapshots: [seedSnapshot()],
      draftLabel: "",
      draftNote: "",
      setDraftLabel: (v) => set({ draftLabel: v }),
      setDraftNote: (v) => set({ draftNote: v }),
      saveSnapshot: () => {
        const s = get();
        const d = derive({
          dimensions: s.dimensions,
          chambers: s.chambers,
          tests: s.tests,
          assumptions: s.assumptions,
          revenue: s.revenue,
          earnings: s.earnings,
        });
        const snap: Snapshot = {
          id: `snap-${Date.now()}`,
          at: new Date().toISOString(),
          label: s.draftLabel.trim() || "حکم بدون عنوان",
          note: s.draftNote.trim(),
          dimensions: { ...s.dimensions },
          chambers: { ...s.chambers },
          tests: { ...s.tests },
          assumptions: { ...s.assumptions },
          health: d.health,
          risk: d.risk,
          passedBlocks: d.passedBlocks,
          floatTokens: d.floatTokens,
          dependence: d.dependence,
        };
        set({
          snapshots: [...s.snapshots, snap].slice(-30),
          draftLabel: "",
          draftNote: "",
        });
      },
      deleteSnapshot: (id) =>
        set((s) => ({
          snapshots: id === "seed-zero" ? s.snapshots : s.snapshots.filter((item) => item.id !== id),
        })),
      applyHints: () => {
        const next = hints(get().assumptions);
        set((s) => ({ dimensions: { ...s.dimensions, ...next } }));
      },
      resetScores: () =>
        set({
          tests: defaultTests(),
          dimensions: defaultDimensions(),
          chambers: defaultChambers(),
          assumptions: defaultAssumptions(),
          revenue: 0,
          earnings: 0,
        }),
    }),
    {
      name: "mizan-aether-crm-v1",
      skipHydration: true,
      storage: createJSONStorage(storage),
      partialize: (s) => ({
        tab: s.tab,
        tests: s.tests,
        dimensions: s.dimensions,
        chambers: s.chambers,
        assumptions: s.assumptions,
        revenue: s.revenue,
        earnings: s.earnings,
        snapshots: s.snapshots,
      }),
    },
  ),
);

export function useDerived() {
  const input = useAether(
    useShallow((s) => ({
      dimensions: s.dimensions,
      chambers: s.chambers,
      tests: s.tests,
      assumptions: s.assumptions,
      revenue: s.revenue,
      earnings: s.earnings,
    })),
  );
  return useMemo(() => derive(input), [input]);
}
