import React from 'react';
import PropTypes from 'prop-types';

const Bauhaus = function Bauhaus({
  pixels, palette, shuffledarr, width,
}) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={width}>
      <rect width="80" height="80" fill={`rgb(${palette[shuffledarr[0]].join(',')})`} />
      <rect x={pixels[0][1]} y={pixels[1][1]} width="80" height="10" fill={`rgb(${palette[shuffledarr[1]].join(',')})`} transform={`translate(4 -4) rotate(${pixels[12][1]} 40 40)`} />
      <rect x={pixels[63][1]} y={pixels[62][1]} width="80" height="10" fill={`rgb(${palette[shuffledarr[4]].join(',')})`} transform={`translate(4 -4) rotate(${pixels[61][1]} 40 40)`} />
      <circle cx={pixels[2][1]} cy={pixels[3][1]} fill={`rgb(${palette[shuffledarr[2]].join(',')})`} r="16" transform="translate(6 6)" />
      <line x1={pixels[7][1]} y1={pixels[4][1]} x2={pixels[5][1]} y2={pixels[7][1] + 80} strokeWidth="2" stroke={`rgb(${palette[shuffledarr[3]].join(',')})`} transform={`translate(-4 4) rotate(${pixels[10][1]} 40 40)`} />
      <line x1={pixels[34][1]} y1={pixels[33][1]} x2={pixels[32][1]} y2={pixels[31][1] + 80} strokeWidth="2" stroke={`rgb(${palette[shuffledarr[4]].join(',')})`} transform={`translate(-4 4) rotate(${pixels[20][1]} 40 40)`} />
    </svg>
  );
};

Bauhaus.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  palette: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  shuffledarr: PropTypes.arrayOf(PropTypes.number).isRequired,
  width: PropTypes.number.isRequired,
};

export default Bauhaus;
