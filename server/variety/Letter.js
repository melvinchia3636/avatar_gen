const luminanceGet = function luminanceGet(rgb) {
  if (!rgb) return null;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

module.exports = function Letter({
  seed, pixels, size, finalPalette,
}) {
  return `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="${size || '128'}" height="${size || '128'}"><rect width="100%" height="100%" fill="${`rgb(${finalPalette[pixels[0][0]].join(',')})`}"></rect><text x="50%" y="50%" text-anchor="middle" style="font-size: 2rem; font-weight: bold; fill: ${luminanceGet(finalPalette[pixels[0][0]]) < 100 ? 'white' : 'black'};"><tspan x="50%0" dy="0.355em">${(seed?.split(' ')?.slice(0, 2)?.map((e) => e[0])?.join('') || '').toUpperCase()}</tspan></text></svg>`;
};
