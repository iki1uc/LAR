import { larEconomy } from "./Engine.js";
import { larSprint } from "./LAR.js";

export function lar(name, mode = "ECONOMY") {
  if (mode === "SPRINT") return larSprint(name);
  return larEconomy(name);
}
