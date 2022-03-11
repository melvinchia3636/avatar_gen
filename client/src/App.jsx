import './App.scss';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import seedrandom from 'seedrandom';
import Lottie from 'react-lottie';

import Pixel from './variety/Pixel';
import Ellipsis from './variety/Ellipsis';
import Bauhaus from './variety/Bauhaus';
import Letter from './variety/Letter';
import Identicon from './variety/Identicon';

const Main = function Main() {
  const [palette, setPalette] = useState();
  const [seed, setSeed] = useState('');
  const [pixels, setPixels] = useState([]);
  const [type, setType] = useState(0);
  const [shuffledarr, setShuffledArr] = useState();
  const [borderRadius, setBorderRadius] = useState(0);
  const [isGenerating, setGenerating] = useState(false);
  const [history] = useState(JSON.parse(localStorage.getItem('history') || '[]') || []);

  const newPalette = () => {
    setGenerating(true);
    axios({
      url: 'https://cors-anywhere.thecodeblog.net/colormind.io/api/',
      method: 'POST',
      data: {
        model: 'default',
      },
    })
      .then((res) => { setPalette(res.data.result); setGenerating(false); })
      .catch((err) => { throw err; });
  };

  useEffect(() => {
    newPalette();
    window.onbeforeunload = function beforeLeaving() {
      localStorage.setItem('history', JSON.stringify(history));
    };
  }, []);

  useEffect(() => {
    if (!history.includes(seed)) history.push(seed);
    const rng = seedrandom(seed);
    setPixels(Array(64).fill().map(() => [Math.floor(rng() * 5), Math.floor(rng() * 64)]));

    const numarr = Array(5).fill().map((_, i) => i);
    const shuffledArr = [];
    while (numarr.length) {
      const num = Math.floor(rng() * numarr.length);
      shuffledArr.push(numarr[num]);
      numarr.splice(num, 1);
    }
    setShuffledArr(shuffledArr);
  }, [seed]);

  const typeComponent = [
    Pixel,
    Ellipsis,
    Bauhaus,
    Letter,
    Identicon,
  ];

  const bottomNav = [
    ['History', './history'],
    ['Changelog', './changelog'],
    ['API Access', './api-access'],
    ['FAQ', 'https://thecodeblog.net/faq'],
    ['Contact', 'mailto: melvinchia623600@gmail.com'],
  ];

  const borderRadiusMap = [
    'rounded-full', 'rounded-2xl', '',
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-4 pt-12 overflow-x-visible">
      <div className="App w-full h-full overflow-hidden flex flex-col gap-6 items-center justify-center">
        <script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js" />
        <h1 className="text-4xl uppercase font-semibold tracking-widest text-gray-500 text-center">
          <span className="text-blue-500">Avatar</span>
          {' '}
          Generator
          {' '}
          <span className="text-gray-400 text-sm tracking-widest lowercase">v1.2</span>
        </h1>
        <div className="flex flex-col flex-shrink-0 sm:flex-row w-full sm:w-auto bg-gray-200 rounded-lg sm:rounded-full overflow-hidden mb-8 relative p-1 shadow-sm">
          <button type="button" onClick={() => setType(0)} className={`w-full sm:w-44 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 0 ? 'text-white' : 'text-gray-500'}`}>Pixels</button>
          <button type="button" onClick={() => setType(1)} className={`w-full sm:w-44 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 1 ? 'text-white' : 'text-gray-500'}`}>Rings</button>
          <button type="button" onClick={() => setType(2)} className={`w-full sm:w-44 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 2 ? 'text-white' : 'text-gray-500'}`}>Bauhaus</button>
          <button type="button" onClick={() => setType(3)} className={`w-full sm:w-44 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 3 ? 'text-white' : 'text-gray-500'}`}>Letter</button>
          <button type="button" onClick={() => setType(4)} className={`w-full sm:w-44 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 4 ? 'text-white' : 'text-gray-500'}`}>Identicon</button>
          <div className={`absolute top-1 active-${type} bg-blue-500 rounded-md sm:rounded-full transition-all`} />
        </div>
        {palette?.length
          ? (() => {
            const TypeComp = typeComponent[type];
            return (
              <div className={`overflow-hidden flex-shrink-0 shadow-md w-32 h-32 flex items-center justify-center transition-all duration-300 ${borderRadiusMap[borderRadius]}`} style={{ backgroundColor: `rgb(${palette[pixels[32][0]].join(',')})` }}>
                <TypeComp
                  pixels={pixels}
                  palette={palette}
                  shuffledarr={shuffledarr}
                  seed={seed}
                  width={128}
                />
              </div>
            );
          })()
          : (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                // eslint-disable-next-line global-require
                animationData: require('./assets/loading_blue.json'),
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              width={50}
              height={50}
              isStopped={false}
              isPaused={false}
            />
          )}
        <input type="text" onChange={(e) => setSeed(e.target.value)} value={seed} placeholder="Enter your username" className="transition-all focus:ring-4 focus:outline-none rounded-full shadow-md w-full sm:w-96 px-4 text-xl tracking-wider text-center py-4 bg-gray-200" />
        <div className="flex gap-4">
          <button type="button" aria-label="Rounded Full" onClick={() => setBorderRadius(0)} className={`w-8 h-8 ${borderRadius === 0 ? 'bg-gray-400' : 'bg-gray-300'} rounded-full`} />
          <button type="button" aria-label="Rounded Edge" onClick={() => setBorderRadius(1)} className={`w-8 h-8 ${borderRadius === 1 ? 'bg-gray-400' : 'bg-gray-300'} rounded-md`} />
          <button type="button" aria-label="Square Border" onClick={() => setBorderRadius(2)} className={`w-8 h-8 ${borderRadius === 2 ? 'bg-gray-400' : 'bg-gray-300'}`} />
        </div>
        <div className="flex gap-4 mt-12">
          {palette?.length && palette.map(([r, g, b]) => (
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)` }}>
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} />
            </div>
          ))}
        </div>
        <button type="button" onClick={newPalette} className="rounded-full shadow-md w-full sm:w-96 text-lg tracking-widest font-semibold text-cente h-16 bg-blue-500 hover:bg-blue-600 transition-all text-white">
          {!isGenerating
            ? 'Random Color Palette'
            : (
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  // eslint-disable-next-line global-require
                  animationData: require('./assets/loading_white.json'),
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                width={50}
                height={50}
                isStopped={false}
                isPaused={false}
              />
            )}
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-x-4 mb-4 mt-8">
        {bottomNav.map(([e, l], i) => (
          <>
            {i !== 0 && '|'}
            <a href={l} className="text-blue-500 transition-all hover:underline hover:text-blue-600 whitespace-nowrap">{e}</a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
