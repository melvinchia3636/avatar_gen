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
  const [type, setType] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [isGenerating, setGenerating] = useState(false);
  const [history] = useState(JSON.parse(localStorage.getItem('history') || '') || []);

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

  const geterateShuffledArr = (seed) => {
    if (!history.includes(seed)) history.push(seed);
    const rng = seedrandom(seed);
    const pixels = (Array(64).fill().map(() => [Math.floor(rng() * 5), Math.floor(rng() * 64)]));

    const numarr = Array(5).fill().map((_, i) => i);
    const shuffledarr = [];
    while (numarr.length) {
      const num = Math.floor(rng() * numarr.length);
      shuffledarr.push(numarr[num]);
      numarr.splice(num, 1);
    }
    return { pixels, shuffledarr };
  };

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
    <div className="w-full flex flex-col px-4 pt-8 pb-2 overflow-x-visible">
      <div className="App w-full h-full overflow-hidden flex flex-col gap-6 items-center justify-center">
        <script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js" />
        <h1 className="text-4xl uppercase font-semibold tracking-widest text-gray-500 text-left w-full px-8">
          Avatar Generation
          <span className="text-blue-500 normal-case"> History</span>
        </h1>
        <div className="flex gap-8 mb-8 w-full items-center px-8 justify-between">
          <div className="flex gap-8 items-center">
            <div className="flex flex-col flex-shrink-0 sm:flex-row w-full sm:w-auto bg-gray-200 rounded-lg sm:rounded-full overflow-hidden relative p-1 shadow-sm">
              <button type="button" onClick={() => setType(0)} className={`w-full sm:w-36 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 0 ? 'text-white' : 'text-gray-500'}`}>Pixels</button>
              <button type="button" onClick={() => setType(1)} className={`w-full sm:w-36 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 1 ? 'text-white' : 'text-gray-500'}`}>Rings</button>
              <button type="button" onClick={() => setType(2)} className={`w-full sm:w-36 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 2 ? 'text-white' : 'text-gray-500'}`}>Bauhaus</button>
              <button type="button" onClick={() => setType(3)} className={`w-full sm:w-36 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 3 ? 'text-white' : 'text-gray-500'}`}>Letter</button>
              <button type="button" onClick={() => setType(4)} className={`w-full sm:w-36 py-2 relative z-10 tracking-widest uppercase font-semibold ${type === 4 ? 'text-white' : 'text-gray-500'}`}>Identicon</button>
              <div className={`absolute top-1 history active-${type} bg-blue-500 rounded-md sm:rounded-full transition-all`} />
            </div>
            <div className="flex gap-4">
              <button type="button" aria-label="Rounded Full" onClick={() => setBorderRadius(0)} className={`w-8 h-8 ${borderRadius === 0 ? 'bg-gray-400' : 'bg-gray-300'} rounded-full`} />
              <button type="button" aria-label="Rounded Edge" onClick={() => setBorderRadius(1)} className={`w-8 h-8 ${borderRadius === 1 ? 'bg-gray-400' : 'bg-gray-300'} rounded-md`} />
              <button type="button" aria-label="Square Border" onClick={() => setBorderRadius(2)} className={`w-8 h-8 ${borderRadius === 2 ? 'bg-gray-400' : 'bg-gray-300'}`} />
            </div>
          </div>
          <div className="flex gap-4">
            {palette?.length && palette.map(([r, g, b]) => (
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} />
              </div>
            ))}
            <button type="button" onClick={newPalette} className="rounded-full flex items-center justify-center flex-shrink-0 shadow-md w-8 h-8 text-lg tracking-widest font-semibold text-cente bg-blue-500 hover:bg-blue-600 transition-all text-white">
              {!isGenerating
                ? (
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 17 16">
                    <g fill="white" fillRule="evenodd">
                      <path d="M16.796 8.908L15.234 7.21a.553.553 0 0 0-.776 0l-1.564 1.698a.543.543 0 0 0 0 .772h1.294a5.345 5.345 0 0 1-3.789 3.79a5.378 5.378 0 0 1-5.767-2.119l-1.091.751a6.709 6.709 0 0 0 7.196 2.643A6.665 6.665 0 0 0 15.55 9.68h1.245a.544.544 0 0 0 .001-.772z" />
                      <path d="M5.475 8.021a.543.543 0 0 0 0-.772H4.018a5.339 5.339 0 0 1 3.771-3.738a5.373 5.373 0 0 1 5.766 2.121l1.092-.752a6.712 6.712 0 0 0-7.199-2.645a6.67 6.67 0 0 0-4.8 5.014H1.196a.543.543 0 0 0 0 .772l1.638 1.637a.553.553 0 0 0 .776 0l1.865-1.637z" />
                    </g>
                  </svg>
                )
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
                    width={24}
                    height={24}
                    isStopped={false}
                    isPaused={false}
                  />
                )}
            </button>
          </div>
        </div>
        <div className="w-full flex pb-2 justify-center gap-2 flex-wrap">
          {JSON.parse(localStorage.getItem('history') || '[]').filter((e) => e).map((e) => (palette?.length
            ? (() => {
              const TypeComp = typeComponent[type];
              const { pixels, shuffledarr } = geterateShuffledArr(e);
              return (
                <div className={`overflow-hidden shadow-md w-16 h-16 flex items-center justify-center transition-all duration-300 ${borderRadiusMap[borderRadius]}`} style={{ backgroundColor: `rgb(${palette[pixels[32][0]].join(',')})` }}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <TypeComp
                    palette={palette}
                    pixels={pixels}
                    shuffledarr={shuffledarr}
                    seed={e}
                    width={64}
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
            )))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-4 mb-4 mt-8">
        {bottomNav.map(([e, l], i) => (
          <>
            {i !== 0 && '|'}
            <a href={l} className="text-blue-500 transition-all hover:underline hover:text-blue-600">{e}</a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
