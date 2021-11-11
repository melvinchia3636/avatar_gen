const Bauhaus = ({ pixels, palette, shuffledarr }) => {
    return <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="128" height="128">
        <mask id="mask__bauhaus" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
            <rect width="80" height="80" rx="160" fill="white"></rect>
        </mask>
        <g mask="url(#mask__bauhaus)">
            <rect width="80" height="80" fill={`rgb(${palette[shuffledarr[0]].join(',')})`}></rect>
            <rect x={pixels[0][1]} y={pixels[1][1]} width="80" height="10" fill={`rgb(${palette[shuffledarr[1]].join(',')})`} transform={`translate(4 -4) rotate(${pixels[12][1]} 40 40)`}></rect>
            <circle cx={pixels[2][1]} cy={pixels[3][1]} fill={`rgb(${palette[shuffledarr[2]].join(',')})`} r="16" transform="translate(6 6)"></circle>
            <line x1={pixels[7][1]} y1={pixels[4][1]} x2={pixels[5][1]} y2={pixels[7][1]+80} stroke-width="2" stroke={`rgb(${palette[shuffledarr[3]].join(',')})`} transform={`translate(-4 4) rotate(${pixels[10][1]} 40 40)`}></line>
        </g>
    </svg>
}

export default Bauhaus;