// Solution for Points on a line

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);
    let points = [];
    
    for (let nItr = 0; nItr < n; nItr++) {
        const xy = readLine().split(' ');
        const x = parseInt(xy[0], 10);
        const y = parseInt(xy[1], 10);
        points.push([x, y]);
    }
    
    let xSet = new Set(), ySet = new Set();
    for (let i = 0; i < n; i++) {
        xSet.add(points[i][0]);
        ySet.add(points[i][1]);
    }
    if (xSet.size === 1 || ySet.size === 1) console.log('YES');
    else console.log('NO');
}
