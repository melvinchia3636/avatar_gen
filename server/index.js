const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ] : null;
};

app.get('/api', async (req, res) => {
  const baseResponseBody = {
    status: 200,
    requestURL: 'https://avatar-gen.thecodeblog.net/api',
    error: null,
    data: null,
  };

  const {
    // eslint-disable-next-line no-unused-vars
    seed, type, size, border, palette,
  } = req.query;

  const raise = (err) => {
    res.status(400);
    baseResponseBody.status = 400;
    baseResponseBody.error = err;
    res.send(baseResponseBody);
  };

  if (!seed) {
    raise('Params "seed" must be specified');
    return;
  }

  if (!['pixels', 'rings', 'bauhaus', 'letter', 'identicon'].includes(type)) {
    raise('Params "type" must be specified to one of "pixels", "rings", "bauhaus", "letter", and "identicon"');
    return;
  }

  // eslint-disable-next-line no-restricted-globals
  if (size && isNaN(size)) {
    raise('Params "size" must be a number');
    return;
  }

  if (border && !['rounded', 'edge', 'none'].includes(border)) {
    raise('Params "border" must be specified to one of "rounded", "edge", and "none"');
    return;
  }

  let finalPalette;
  if (palette) {
    let tryParsePalette;
    try {
      tryParsePalette = JSON.parse(palette);
    } catch {
      raise('Params "palette" must be a valid array');
      return;
    }
    if (tryParsePalette.length !== 5) {
      raise('Params "palette" must be an array with a length of 5');
      return;
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const i of tryParsePalette) {
      if (!/^[0-9A-F]{6}$/i.test(i.toUpperCase())) {
        raise(`${i} is not a valid color. "3B82F6" is an example of valid color.`);
        return;
      }
    }

    finalPalette = tryParsePalette.map(hexToRgb);
  } else {
    const request = await axios({
      url: 'http://colormind.io/api/',
      method: 'POST',
      data: {
        model: 'default',
      },
    });

    // eslint-disable-next-line no-unused-vars
    finalPalette = request.data;
  }

  baseResponseBody.data = finalPalette;

  res.send(baseResponseBody);
});

app.listen(port);
