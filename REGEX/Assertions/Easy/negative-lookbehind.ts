// (?<=regex_2)regex_1
// The negative lookbehind (?<!) asserts regex_1 not to be immediately preceded by regex_2. Lookbehind is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

// https://s3.amazonaws.com/hr-challenge-images/14904/1449649059-ad29ed4d89-ach25.png

// Task

// You have a test String S.
// Write a regex which can match all the occurences of characters which are not immediately preceded by vowels (a, e, i, u, o, A, E, I, O, U).

// Note

// This is a regex only challenge. You are not required to write a code.
// You have to fill the regex pattern in the blank (_________).

// JavaScript do not support lookbehind.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const input = readLine(),
         vowels = 'aeiouAEIOU'; 
    let count = 0, matches: string[] = []; 
    for (let i = 0; i < input.length; i++) { 
        if (i === 0 || !vowels.includes(input[i - 1])) { 
            matches.push(input[i]); 
            count++; 
        } 
    } 
    console.log(`Number of matches : ${count}`); 
}
