module.exports = function Pixels({
  pixels, size, finalPalette,
}) {
  return `<svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" width="${size || '128'}" height="${size || '128'}">${pixels.map((e, i) => `<rect width="1" height="1" x="${i % 8}" y="${Math.floor(i / 8)}" fill="${`rgb(${finalPalette[e[0]].join(',')})`}" />`).join('')}</svg>`;
};
