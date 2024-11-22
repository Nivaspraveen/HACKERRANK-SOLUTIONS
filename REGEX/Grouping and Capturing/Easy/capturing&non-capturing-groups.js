// ()

// Parenthesis ( ) around a regular expression can group that part of regex together. This allows us to apply different quantifiers to that group.

// These parenthesis also create a numbered capturing. It stores the part of string matched by the part of regex inside parentheses.

// These numbered capturing can be used for backreferences. ( We shall learn about it later )
// https://s3.amazonaws.com/hr-challenge-images/14621/1449645417-9339477c31-ach16.png
// In the above image Regex Pattern is matched with the Test String.

// (?:)

// (?: ) can be used to create a non-capturing group. It is useful if we do not need the group to capture its match.

// Task

// You have a test String S.
// Your task is to write a regex which will match S with the following condition:

// S should have 3 or more consecutive repetitions of ok.
// Note

// This is a regex only challenge. You are not required to write a code.
// You have to fill the regex pattern in the blank (_________).

var Regex_Pattern = /(?:ok){3,}/; //Do not delete '/'. Replace __________ with your regex.

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
