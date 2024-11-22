// Solution for restaurant

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
 * Complete the 'restaurant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER b
 */

function gcd(a, b) {
    // Function to calculate the GCD using the Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function restaurant(l, b) {
    const sideLength = gcd(l, b); // Find the maximum size of square
    const numSquares = (l / sideLength) * (b / sideLength); // Calculate number of squares
    return numSquares;
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const l = parseInt(firstMultipleInput[0], 10);
        const b = parseInt(firstMultipleInput[1], 10);

        const result = restaurant(l, b);

        ws.write(result + '\n');
    }

    ws.end();
}
