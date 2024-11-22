// Solution for Best Divisor

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

function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Main function to find the best divisor
function bestDivisor(n) {
    let bestDivisor = 1, maxDigitSum = sumOfDigits(bestDivisor); 
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            let digitSum = sumOfDigits(i);
            if (digitSum > maxDigitSum || (digitSum === maxDigitSum && i < bestDivisor)) {
                bestDivisor = i;
                maxDigitSum = digitSum;
            }
            let otherDivisor = n / i;
            if (otherDivisor !== i) {
                digitSum = sumOfDigits(otherDivisor);
                if (digitSum > maxDigitSum || (digitSum === maxDigitSum && otherDivisor < bestDivisor)) {
                    bestDivisor = otherDivisor;
                    maxDigitSum = digitSum;
                }
            }
        }
    }
    return bestDivisor;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    console.log(bestDivisor(n));
}
