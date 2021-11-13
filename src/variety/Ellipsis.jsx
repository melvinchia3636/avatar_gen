import React from 'react';
import PropTypes from 'prop-types';

const Ellipsis = function Pixel({ pixels, palette, width }) {
  return (
    <svg width={width} height={width} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      {['M64 0C28.6538 0 0 28.6538 0 64H128C128 28.6538 99.3462 0 64 0Z',
        'M64 9C33.6243 9 9 33.6243 9 64H119C119 33.6243 94.3757 9 64 9Z',
        'M64 18C38.5949 18 18 38.5949 18 64H110C110 38.5949 89.4051 18 64 18Z',
        'M64 27C43.5655 27 27 43.5655 27 64H101C101 43.5655 84.4345 27 64 27Z',
        'M64 128C99.3462 128 128 99.3462 128 64L0 64C0 99.3462 28.6538 128 64 128Z',
        'M64 119C94.3757 119 119 94.3757 119 64L9 64C9 94.3757 33.6243 119 64 119Z',
        'M64 110C89.4051 110 110 89.4051 110 64L18 64C18 89.4051 38.5949 110 64 110Z',
        'M64 101C84.4345 101 101 84.4345 101 64L27 64C27 84.4345 43.5655 101 64 101Z'].map((e, i) => <path d={e} fill={`rgb(${palette[pixels[i][0]].join(',')})`} />)}
    </svg>
  );
};

Ellipsis.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  palette: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  width: PropTypes.number.isRequired,
};

export default Ellipsis;
