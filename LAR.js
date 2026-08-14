export const LAR = {

  resolve(kargaOut){
    const valid = kargaOut.modules.map(m => ({
      name: m.name,
      valid: m.state === "FOUND",
      mode: "RESOLVED"
    }));

    return {
      lar: "OK",
      valid
    };
  }
};
