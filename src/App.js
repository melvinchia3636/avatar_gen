import './App.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import seedrandom from 'seedrandom';

import Pixel from "./variety/Pixel";
import Ellipsis from "./variety/Ellipsis";
import Bauhaus from "./variety/Bauhaus";

function App() {
  const [palette, setPalette] = useState();
  const [seed, setSeed] = useState("");
  const [pixels, setPixels] = useState([]);
  const [type, setType] = useState(0);
  const [shuffledarr, setShuffledArr] = useState();

  const newPalette = () => axios({
    url: "https://cors-anywhere.thecodeblog.net/colormind.io/api/",
    method: "POST",
    data: {
      model:"default"
    }
  }).then(res => setPalette(res.data.result)).catch(err => console.log(err))

  useEffect(() => {
    newPalette();
  }, []);

  useEffect(() => {
    const rng = seedrandom(seed);
    setPixels(Array(64).fill().map(() => [Math.floor(rng() * 5), Math.floor(rng() * 60)]));

    const numarr = Array(5).fill().map((_, i) => i);
    const _shuffledarr = [];
    while (numarr.length) {
      let num = Math.floor(rng() * numarr.length);
      _shuffledarr.push(numarr[num]);
      numarr.splice(num, 1);
    }
    setShuffledArr(_shuffledarr);
  }, [seed]);

  const typeComponent = [
    Pixel,
    Ellipsis,
    Bauhaus
  ]

  return (
    <div className="App w-full h-screen flex flex-col gap-6 items-center justify-center bg-gray-50">
      <script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>
      <h1 className="text-4xl uppercase font-semibold tracking-widest text-gray-500"><span className="text-blue-500">Avatar</span> Generator</h1>
      <div className="flex bg-gray-200 rounded-full overflow-hidden mb-8 relative p-1 shadow-sm">
        <button onClick={() => setType(0)} className={`w-48 py-4 relative z-10 text-md tracking-widest uppercase font-medium ${type === 0 ? "text-white font-semibold" : "text-gray-500"}`}>Pixels</button>
        <button onClick={() => setType(1)} className={`w-48 py-4 relative z-10 text-md tracking-widest uppercase font-medium ${type === 1 ? "text-white font-semibold" : "text-gray-500"}`}>Rings</button>
        <button onClick={() => setType(2)} className={`w-48 py-4 relative z-10 text-md tracking-widest uppercase font-medium ${type === 2 ? "text-white font-semibold" : "text-gray-500"}`}>Bauhaus</button>
        <div className={`absolute top-1 active-${type} bg-blue-500 rounded-full transition-all`}></div>
      </div>
      {palette?.length && (() => {
        const TypeComp = typeComponent[type];
        return <TypeComp pixels={pixels} palette={palette} shuffledarr={shuffledarr} />
      })()}
      <input type="text" onChange={e => setSeed(e.target.value)} value={seed} placeholder="Enter your username" className="transition-all focus:ring-4 rounded-full shadow-md w-96 text-xl text-center py-4 bg-gray-200"/>
      <div className="flex gap-4 mt-12">
        {palette?.length && palette.map(([r, g, b]) => <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`}}>
          <div className="w-6 h-6 rounded-full" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
        </div>)}
      </div>
      <button onClick={newPalette} className="rounded-full shadow-md w-96 text-md uppercase tracking-widest font-medium text-center py-5 bg-blue-500 text-white">New Color Palette</button>
    </div>
  );
}

export default App;
