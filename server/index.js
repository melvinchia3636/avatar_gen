const express = require('express');
const axios = require('axios');

const getRandom = require('./getRandom');
const Pixels = require('./variety/Pixels');
const Bauhaus = require('./variety/Bauhaus');
const Identicon = require('./variety/Identicon');
const Ellipsis = require('./variety/Ellipsis');
const Letter = require('./variety/Letter');

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

const typesMap = {
  pixels: Pixels,
  bauhaus: Bauhaus,
  identicon: Identicon,
  rings: Ellipsis,
  letter: Letter,
};

app.get('/api', async (req, res) => {
  const baseResponseBody = {
    status: 200,
    requestURL: 'https://avatar-gen.thecodeblog.net/api',
    error: null,
    data: null,
  };

  const {
    seed, type, size, palette,
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

  if (!['pixels', 'rings', 'bauhaus', 'letter', 'identicon'].includes(type.toLowerCase())) {
    raise('Params "type" must be specified to one of "pixels", "rings", "bauhaus", "letter", and "identicon"');
    return;
  }

  // eslint-disable-next-line no-restricted-globals
  if (size && isNaN(size)) {
    raise('Params "size" must be a number');
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

    finalPalette = request.data.result;
  }

  const { pixels, shuffledArr } = getRandom(seed);

  baseResponseBody.data = {};
  // eslint-disable-next-line no-console
  baseResponseBody.data.result = typesMap[type.toLowerCase()]({
    seed, pixels, shuffledArr, size, finalPalette,
  });

  res.send(baseResponseBody);
});

app.listen(port);
