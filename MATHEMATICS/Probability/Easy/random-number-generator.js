// Solution for Random number generator

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
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 *  3. INTEGER c
 */

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

function solve(a, b, c) {
    let numer = 0, denom = a * b;
    if (c <= a + b) {
        numer = (c * c) / 2;
        if (c > a) numer -= ((c - a) * (c - a)) / 2;
        if (c > b) numer -= ((c - b) * (c - b)) / 2;
    }
    else numer = denom;
    const commonDiv = gcd(numer, denom);
    return `${numer / commonDiv}/${denom / commonDiv}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    for (let nItr = 0; nItr < n; nItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const c = parseInt(firstMultipleInput[2], 10);

        const result = solve(a, b, c);

        ws.write(result + '\n');
    }

    ws.end();
}
