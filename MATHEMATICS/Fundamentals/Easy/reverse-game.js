// Solution for Reverse Game

'use strict';

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

function findFinalPosition(n, k) {
    let position = k; 
    for (let i = 0; i < n; i++) {
        if (position >= i) {
            position = i + (n - 1 - position); 
        }
    }
    return position; 
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10); // number of balls
        const k = parseInt(firstMultipleInput[1], 10); // the ball whose position we need to find

        const result = findFinalPosition(n, k);

        console.log(result); // Print the result for each test case
    }
}
