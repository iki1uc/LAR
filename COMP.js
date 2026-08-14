export function larSuggest(result) {
  if (result.ok) return "Platzierung optimal";

  if (result.type === "tmp") return "tmp muss 001–081";
  if (result.type === "vec") return "vec muss 082–162";
  if (result.type === "re")  return "re muss 163–243";
}
