// You are given an integer N. Can you find the least positive integer X made up of only 9's and 0's, such that, X is a multiple of N?

// Update

// X is made up of one or more occurences of 9 and zero or more occurences of 0.

// Input Format
// The first line contains an integer T which denotes the number of test cases. T lines follow.
// Each line contains the integer N for which the solution has to be found.

// Output Format
// Print the answer X to STDOUT corresponding to each test case. The output should not contain any leading zeroes.

// Constraints
// 1 <= T <= 104
// 1 <= N <= 500

// Sample Input

// 3
// 5
// 7
// 1
// Sample Output

// 90
// 9009
// 9
// Explanation
// 90 is the smallest number made up of 9's and 0's divisible by 5. Similarly, you can derive for other cases.

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
 * The function is expected to return a STRING.
 * The function accepts INTEGER n as parameter.
 */

function solve(n) {
    let queue = [], visited = new Set();
    queue.push({num: "9", remainder: 9 % n});
    visited.add(9 % n);

    while (queue.length > 0) {
        let front = queue.shift(), num = front.num, remainder = front.remainder;
        if (remainder === 0) return num;
        let nextRemainder = (remainder * 10) % n;
        if (!visited.has(nextRemainder)) {
            visited.add(nextRemainder);
            queue.push({num: num + "0", remainder: nextRemainder});
        }
        nextRemainder = (remainder * 10 + 9) % n;
        if (!visited.has(nextRemainder)) {
            visited.add(nextRemainder);
            queue.push({num: num + "9", remainder: nextRemainder});
        }
    }

    return "";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = solve(n);

        ws.write(result + '\n');
    }

    ws.end();
}