import { karga } from "../KARGA/KARGA.js";
import { larBoost } from "./BOOST.js";
import { larSuggest } from "./SUGGEST.js";
import { larCompetence } from "./COMP.js";
import { larRisk } from "./RISK.js";
import { larSlide } from "./SLIDE.js";
import { larLayer } from "./LAYER.js";

export function larSprint(name){

  const base = karga(name);
  const res  = base.result;

  return {
    mode: "SPRINT",
    modul: name,

    // KARGA-Daten
    axis: res.axis,
    number: res.num,
    ok: res.ok,

    // LAR-Daten
    boost: larBoost(res).boost,
    suggestion: larSuggest(res),
    competence: larCompetence(res),
    risk: larRisk(res),
    slide: larSlide(res),
    layer: larLayer(res),

    // Diagnose + Team
    diag: base.diag,
    team: base.team
  };
}
