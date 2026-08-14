import { karga } from "../KARGA/KARGA.js";
import { larBoost, larSuggest, larCompetence } from "./LAR3E.js";

export function lar(name) {
  const base = karga(name);

  return {
    modul: name,
    axis: base.result.axis,
    number: base.result.num,
    ok: base.result.ok,
    boost: larBoost(base.result).boost,
    suggestion: larSuggest(base.result),
    competence: larCompetence(base.result)
  };
}
