// Solution for Counting Valleys

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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let seaLevel = 0, valleys = 0, inValley = false;
    
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') seaLevel++;
        else if (path[i] === 'D') seaLevel--;
        
        if (seaLevel < 0 && !inValley) {
            inValley = true;
            valleys++;
        }
        if (seaLevel >= 0 && inValley) inValley = false;
    }
    return valleys;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
