import { karga } from "../KARGA/KARGA.js";
import { larBoost } from "./BOOST.js";
import { larSuggest } from "./SUGGEST.js";
import { larCompetence } from "./COMP.js";
import { larRisk } from "./RISK.js";
import { larSlide } from "./SLIDE.js";
import { larLayer } from "./LAYER.js";

export function larSprint(name) {
  const base = karga(name);

  return {
    mode: "SPRINT",
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
