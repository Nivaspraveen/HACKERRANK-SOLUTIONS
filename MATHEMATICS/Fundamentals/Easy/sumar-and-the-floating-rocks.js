// Solution for Sumar and the Floating rocks

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
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER y1
 *  3. INTEGER x2
 *  4. INTEGER y2
 */

function gcd(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}

function solve(x1, y1, x2, y2) {
    const dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
    return gcd(dx, dy) - 1;
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const x1 = parseInt(firstMultipleInput[0], 10);

        const y1 = parseInt(firstMultipleInput[1], 10);

        const x2 = parseInt(firstMultipleInput[2], 10);

        const y2 = parseInt(firstMultipleInput[3], 10);

        const result = solve(x1, y1, x2, y2);

        ws.write(result + '\n');
    }

    ws.end();
}
