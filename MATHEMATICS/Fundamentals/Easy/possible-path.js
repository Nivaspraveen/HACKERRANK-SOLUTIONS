// Solution for Possible Path

'use strict';

import { createWriteStream } from 'fs';

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
 *  1. LONG_INTEGER a
 *  2. LONG_INTEGER b
 *  3. LONG_INTEGER x
 *  4. LONG_INTEGER y
 */

function gcd(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}

function solve(a, b, x, y) {
    const start = gcd(Math.abs(a), Math.abs(b)),
        target = gcd(Math.abs(x), Math.abs(y));
    return start === target ? 'YES' : 'NO';
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const x = parseInt(firstMultipleInput[2], 10);

        const y = parseInt(firstMultipleInput[3], 10);

        const result = solve(a, b, x, y);

        ws.write(result + '\n');
    }

    ws.end();
}
