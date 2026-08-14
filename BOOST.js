export function larBoost(result) {
  return {
    ...result,
    boost: result.ok ? "LAR: verstärkt" : "LAR: korrigiert"
  };
}
