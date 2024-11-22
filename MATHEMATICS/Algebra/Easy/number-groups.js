// Solution for Number Groups

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
 * Complete the 'sumOfGroup' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER k as parameter.
 */

function sumOfGroup(k) {
    return BigInt(k) * BigInt(k) * BigInt(k);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const k = parseInt(readLine().trim(), 10);

    const answer = sumOfGroup(k);

    ws.write(answer + '\n');

    ws.end();
}
