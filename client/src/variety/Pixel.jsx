import React from 'react';
import PropTypes from 'prop-types';

const Pixel = function Pixel({ pixels, palette, width }) {
  return (
    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={width}>
      {pixels.map((e, i) => <rect width="1" height="1" x={i % 8} y={Math.floor(i / 8)} fill={`rgb(${palette[e[0]].join(',')})`} />)}
    </svg>
  );
};

Pixel.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  palette: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  width: PropTypes.number.isRequired,
};

export default Pixel;
