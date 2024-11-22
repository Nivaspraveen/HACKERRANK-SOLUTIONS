// Solution for Jim and Jokes 

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
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY dates as parameter.
 */

function isValidInBase(number, base) {
    const digits = number.toString().split('').map(Number);
    return digits.every(digit => digit < base);
}

function solve(dates) {
    const map = new Map();
    for (const [m, d] of dates) {
        if (m <= 1 || !isValidInBase(d, m)) continue; 
        const baseConvertedValue = parseInt(d.toString(), m);

        if (!map.has(baseConvertedValue)) {
            map.set(baseConvertedValue, []);
        }
        map.get(baseConvertedValue).push([m, d]);
    }

    let jokeCount = 0;

    for (const pairs of map.values()) {
        const count = pairs.length;
        if (count > 1) {
            jokeCount += (count * (count - 1)) / 2;
        }
    }

    return jokeCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let dates = Array(n);

    for (let i = 0; i < n; i++) {
        dates[i] = readLine().replace(/\s+$/g, '').split(' ').map(datesTemp => parseInt(datesTemp, 10));
    }

    const result = solve(dates);

    ws.write(result + '\n');

    ws.end();
}