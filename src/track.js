function generateTrack() {
  const types = ["reta", "curva", "confronto"];
  const index = Math.floor(Math.random() * types.length);
  return types[index];
}

module.exports = generateTrack;
