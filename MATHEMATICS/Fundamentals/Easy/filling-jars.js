// Solution for Filling jars

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
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY operations
 */

function solve(n, operations) {
    let jars = new Array(n + 1).fill(0);
    for (let op of operations) {
        let a = op[0] - 1, b = op[1] - 1, c = op[2];
        jars[a] += c;
        if (b + 1 < n) jars[b + 1] -= c;
    }
    let totalCandies = 0, currCandies = 0;
    for (let i = 0; i < n; i++) {
        currCandies += jars[i];
        totalCandies += currCandies;
    }
    return Math.floor(totalCandies / n);
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let operations = Array(m);

    for (let i = 0; i < m; i++) {
        operations[i] = readLine().replace(/\s+$/g, '').split(' ').map(operationsTemp => parseInt(operationsTemp, 10));
    }

    const result = solve(n, operations);

    ws.write(result + '\n');

    ws.end();
}
