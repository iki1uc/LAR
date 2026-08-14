import { larSprint } from "./LAR.js";

export function overdrive(name) {
  const base = larSprint(name);

  return {
    ...base,
    overdrive: true,
    priority: base.ok ? "high" : "critical",
    boostLevel: base.ok ? 2 : 5,
    stageReady: base.ok ? "yes" : "needs-fix",
    message: base.ok
      ? "SPRINT Overdrive aktiv – maximale Leistung."
      : "SPRINT Overdrive aktiv – Modul wird korrigiert."
  };
}
