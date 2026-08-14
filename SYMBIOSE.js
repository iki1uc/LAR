import { lar } from "./LAR.js";
import { respoAI } from "../KARGA/RESPO.js";

export function symbiose(name) {
  const l = lar(name);
  const ai = respoAI(name);

  return {
    modul: name,
    axis: l.axis,
    number: l.number,
    ok: l.ok,
    diag: l.diag,
    boost: l.boost,
    suggestion: l.suggestion,
    competence: ai.ai.competence,
    risk: ai.ai.risk,
    slide: ai.ai.slide
  };
}
