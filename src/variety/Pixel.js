const Pixel = ({ pixels, palette }) => {
    return <div className="grid grid-cols-8 rounded-full overflow-hidden">{pixels.map(e => <div className="w-4 h-4" style={{backgroundColor: `rgb(${palette[e[0]].join(',')})`}}></div>)}</div>
}

export default Pixel;