/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */

const SQUARE_DENSITY = 4; // density of 4 for the lowest probability of collision

// 32 bit FNV-1a hash parameters
const FNV_PRIME = 16777619;
const OFFSET_BASIS = 2166136261;

// FNV1a-like hash function http://www.isthe.com/chongo/tech/comp/fnv/index.html
function pseudoFNV1a(str) {
  return str.split('')
  // >>> 0 for 32 bit unsigned integer conversion https://2ality.com/2012/02/js-integers.html
    .reduce((hash, char) => ((hash ^ char.charCodeAt(0)) >>> 0) * FNV_PRIME, OFFSET_BASIS);
}

const identicon = function identicon(username, color, size) {
  const hash = pseudoFNV1a(username);
  const rects = username ? [...Array(25).keys()]
    .map((i) => (hash % (16 - i % 15) < SQUARE_DENSITY
      ? `<rect x="${`${i > 14 ? 7 - ~~(i / 5) : ~~(i / 5)}`}" y="${`${i % 5}`}" width="1" height="1" />` : ''))
    : [];
  return (
    `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" width="${size || '128'}" height="${size || '128'}" fill="${`${color}`}"><rect x="-1.5" y="-1.5" width="100%" height="100%" fill="white" />${rects.join('')}</svg>`
  );
};

module.exports = function Letter({
  seed, pixels, finalPalette, size,
}) {
  return identicon(seed, `rgb(${finalPalette[pixels[0][0]].join(',')})`, size);
};
