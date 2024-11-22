// (?<=regex_2)regex_1

// The positive lookbehind (?<=) asserts regex_1 to be immediately preceded by regex_2. Lookbehind is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

// https://s3.amazonaws.com/hr-challenge-images/14903/1449648924-81d5f2a6d0-ach24.png
// In the above image Regex Pattern is matched with the Test String.

// Task

// You have a test String S.
// Write a regex which can match all the occurences of digit which are immediately preceded by odd digit.

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
        pattern = /(?<=[13579])\d/g,
        matches = input.match(pattern);
    if (matches) {
        console.log(`Number of matches : ${matches.length}`);
        // matches.forEach(m => console.log(m));
    }
    else console.log('No matches found');    
}