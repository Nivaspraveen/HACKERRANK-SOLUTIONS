// Solution for B'day gift

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
 * The function is expected to return a DOUBLE.
 * The function accepts INTEGER_ARRAY balls as parameter.
 */

function solve(balls) {
    let expectedValue = 0;
    for (let i = 0; i < balls.length; i++) expectedValue += balls[i] / 2;
    return expectedValue.toFixed(1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ballsCount = parseInt(readLine().trim(), 10);

    let balls = [];

    for (let i = 0; i < ballsCount; i++) {
        const ballsItem = parseInt(readLine().trim(), 10);
        balls.push(ballsItem);
    }

    const result = solve(balls);

    ws.write(result + '\n');

    ws.end();
}
