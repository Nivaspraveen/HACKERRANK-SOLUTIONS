// []
// The character class [ ] matches only one out of several characters placed inside the square brackets.

// https://s3.amazonaws.com/hr-challenge-images/14272/1449642685-b62f9f5db1-ach07.png

// Task

// You have a test string S.
// Your task is to write a regex that will match  with following conditions:

// S must be of length: 6
// First character: 1, 2 or 3
// Second character: 1, 2 or 0
// Third character: x, s or 0
// Fourth character: 3, 0 , A or a
// Fifth character: x, s or u
// Sixth character: . or ,
// Note

// This is a regex only challenge. You are not required to write any code.
// You have to fill the regex pattern in the blank (_________).

var Regex_Pattern = /^[^0-9][^aeiou][^bcdDF]\S[^AEIOU][^.,]$/; //Do not delete '/'. Replace __________ with your regex.

function processData(Test_String) {
    //Enter your code here
    
    console.log(!!Test_String.match(Regex_Pattern));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});