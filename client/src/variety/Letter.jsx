import React from 'react';
import PropTypes from 'prop-types';
import Text from 'react-svg-text';

const luminanceGet = function luminanceGet(rgb) {
  if (!rgb) return null;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

const Letter = function Letter({
  seed, palette, pixels, width,
}) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={width}>
      <rect width="100%" height="100%" fill={`rgb(${palette[pixels[0][0]].join(',')})`} />
      <Text style={{ fontSize: '2rem', fontWeight: 'bold', fill: luminanceGet(palette[pixels[0][0]]) < 100 ? 'white' : 'black' }} verticalAnchor="middle" textAnchor="middle" x="50%" y="50%">{(seed?.split(' ')?.slice(0, 2)?.map((e) => e[0])?.join('') || '').toUpperCase()}</Text>
    </svg>
  );
};

Letter.propTypes = {
  seed: PropTypes.string.isRequired,
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  palette: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  width: PropTypes.number.isRequired,
};

export default Letter;
