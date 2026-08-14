import { karga } from "../KARGA/KARGA.js";
import { larBoost } from "./BOOST.js";
import { larSuggest } from "./SUGGEST.js";
import { larCompetence } from "./COMP.js";

export function larEconomy(name) {
  const base = karga(name);

  return {
    mode: "ECONOMY",
    modul: name,
    axis: base.result.axis,
    number: base.result.num,
    ok: base.result.ok,
    boost: larBoost(base.result).boost,
    suggestion: larSuggest(base.result),
    competence: larCompetence(base.result)
  };
}
