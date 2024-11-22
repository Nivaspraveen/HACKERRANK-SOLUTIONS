// Solution for Closest Number

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
 * Complete the 'closestNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 *  3. INTEGER x
 */

function closestNumber(a, b, x) {
    let ab = Math.pow(a, b), lower = Math.floor(ab / x) * x, higher = Math.ceil(ab / x) * x;
    if (Math.abs(lower - ab) <= Math.abs(higher - ab)) return lower;
    else return higher;
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const x = parseInt(firstMultipleInput[2], 10);

        const result = closestNumber(a, b, x);

        ws.write(result + '\n');
    }

    ws.end();
}
