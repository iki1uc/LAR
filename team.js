import { core } from "./CORE.js";
import { diagnose } from "./DIAG.js";
import { save } from "./STORE.js";
import { ourMode } from "./OUR.js";

export function karga(name){

  // 1) Kernanalyse
  const result = core(name);  
  // erwartet: { axis, num, ok }

  // 2) Diagnose
  const diag = diagnose(result);
  // erwartet: { status, reason }

  // 3) Team-Modus
  const team = ourMode(result);
  // erwartet: { mode, level }

  // 4) Speichern
  save({
    name,
    axis: result.axis,
    num: result.num,
    ok: result.ok,
    diag,
    team
  });

  // 5) Rückgabe
  return {
    result,
    diag,
    team
  };
}
