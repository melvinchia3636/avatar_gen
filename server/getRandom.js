const seedrandom = require('seedrandom');

module.exports = function generateRandom(seed) {
  const rng = seedrandom(seed);
  const pixels = (Array(64).fill().map(() => [Math.floor(rng() * 5), Math.floor(rng() * 64)]));

  const numarr = Array(5).fill().map((_, i) => i);
  const shuffledArr = [];
  while (numarr.length) {
    const num = Math.floor(rng() * numarr.length);
    shuffledArr.push(numarr[num]);
    numarr.splice(num, 1);
  }
  return { pixels, shuffledArr };
};
