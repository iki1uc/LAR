import { karga } from "../KARGA/KARGA.js";

export function larBoost(result) {
  if (!result.ok) {
    return {
      ...result,
      boost: "LAR: automatische Optimierung aktiviert",
      suggestion: result.type === "tmp"
        ? "tmp muss 001–081"
        : result.type === "vec"
        ? "vec muss 082–162"
        : "re muss 163–243"
    };
  }

  return {
    ...result,
    boost: "LAR: Ergebnis verstärkt",
    suggestion: "Modul ist optimal platziert"
  };
}

export function lar(name) {
  const base = karga(name);
  const boosted = larBoost(base.result);

  return {
    modul: name,
    axis: base.result.axis,
    number: base.result.num,
    ok: base.result.ok,
    diag: base.diag,
    boost: boosted.boost,
    suggestion: boosted.suggestion
  };
}
