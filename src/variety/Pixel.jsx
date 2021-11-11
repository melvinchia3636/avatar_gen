import React from 'react';
import PropTypes from 'prop-types';

const Pixel = function Pixel({ pixels, palette }) {
  return <div className="grid " style={{ gridTemplateColumns: 'repeat(8, auto)' }}>{pixels.map((e) => <div className="w-4 h-4" style={{ backgroundColor: `rgb(${palette[e[0]].join(',')})` }} />)}</div>;
};

Pixel.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  palette: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Pixel;
