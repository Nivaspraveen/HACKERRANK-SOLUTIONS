// Solution for Time Conversion

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const period = s.slice(-2);
    let hr = parseInt(s.slice(0, 2), 10);
    const min = s.slice(3, 5), sec = s.slice(6, 8);
    if (period === 'AM') {
        if (hr === 12) hr = 0;
    } else if (period === 'PM') {
        if (hr !== 12) hr += 12;
    }
    const hrStr = hr.toString().padStart(2, '0');
    return `${hrStr}:${min}:${sec}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
