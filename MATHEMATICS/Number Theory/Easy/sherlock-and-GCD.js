// Solution for Sherlock and GCD

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
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function solve(a) {
    let uniqueArr = Array.from(new Set(a));
    let gcdVal = uniqueArr[0];
    for (let i = 1; i < uniqueArr.length; i++) {
        gcdVal = gcd(gcdVal, uniqueArr[i]);
        if (gcdVal === 1) return 'YES';
    }
    return gcdVal === 1 ? "YES" : "NO";
}

function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

function main() {
    const ws = createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const aCount = parseInt(readLine().trim(), 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const result = solve(a);

        ws.write(result + '\n');
    }

    ws.end();
}
