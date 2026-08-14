export function larLayer(result) {
  if (result.axis === "O") return "Ursprung";
  if (result.axis === "Z") return "Zustand";
  if (result.axis === "T") return "Tiefe";
}
