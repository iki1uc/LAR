import { karga } from "../KARGA/KARGA.js";
import { larBoost, larSuggest, larCompetence, larRisk, larSlide, larLayer } from "./LAR6E.js";

export function lar(name) {
  const base = karga(name);

  return {
    modul: name,
    axis: base.result.axis,
    number: base.result.num,
    ok: base.result.ok,
    boost: larBoost(base.result).boost,
    suggestion: larSuggest(base.result),
    competence: larCompetence(base.result),
    risk: larRisk(base.result),
    slide: larSlide(base.result),
    layer: larLayer(base.result)
  };
}
