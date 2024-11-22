// You are given an integer, N. Write a program to determine if N is an element of the Fibonacci sequence.

// The first few elements of the Fibonacci sequence are 0,1,1,2,3,5,8,13... . A Fibonacci sequence is one where every element is a sum of the previous two elements in the sequence. The first two elements are 0 and 1.

// Formally:

// fib0 = 0
// fib1 = 1
// .
// . 
// .
// fib(n) = fib(n - 1) + fib(n - 2), n > 2

// Function Description

// Complete the isFibo function in the editor below.

// isFibo has the following parameters:
// - int n: the number to check

// Returns
// - string: either IsFibo or IsNotFibo

// Input Format
// The first line contains t, number of test cases.
//  lines follow. Each line contains an integer n.

// Constraints
// 1 <= t <= 10^5
// 1 <= n <= 10^10

// Sample Input

// STDIN   Function
// -----   --------
// 3       t = 3
// 5       n = 5
// 7       n = 7
// 8       n = 8
// Sample Output

// IsFibo
// IsNotFibo
// IsFibo
// Explanation
// 5 is a Fibonacci number given by fib(5) = 3 + 2
// 7 is not a Fibonacci number
// 8 is a Fibonacci number given by fib(6) = 5 + 3

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
 * Complete the 'isFibo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function isPerfectSquare(x) {
    let s = Math.floor(Math.sqrt(x));
    return s * s === x;
}

function isFibo(n) {
    if (isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)) {
        return "IsFibo";
    } else {
        return "IsNotFibo";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = isFibo(n);

        ws.write(result + '\n');
    }

    ws.end();
}
