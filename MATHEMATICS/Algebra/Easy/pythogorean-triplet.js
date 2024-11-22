// Solution for Pythagorean Triplet

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
 * Complete the 'pythagoreanTriple' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER a as parameter.
 */

function pythagoreanTriple(a) {
    const A = BigInt(a);
    let b, c;
    if (A % 2n === 1n) {
        b = (A * A - 1n) / 2n;
        c = (A * A + 1n) / 2n;
    } else {
        const halfA = A / 2n;
        b = (halfA * halfA - 1n);
        c = (halfA * halfA + 1n);
    }
    return [A, b, c];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = parseInt(readLine().trim(), 10);

    const triple = pythagoreanTriple(a);

    ws.write(triple.join(' ') + '\n');

    ws.end();
}
