// [^]
// The negated character class [^] matches any character that is not in the square brackets.

// https://s3.amazonaws.com/hr-challenge-images/14273/1449643683-8e249ed955-ach08.png

// Task

// You have a test string S.
// Your task is to write a regex that will match S with the following conditions:

// S must be of length 6.
// First character should not be a digit (1, 2, 3, 4, 5, 6, 7, 8, 9 or 0).
// Second character should not be a lowercase vowel (a,e,i,o or u).
// Third character should not be b, c, D or F.
// Fourth character should not be a whitespace character ( \r, \n, \t, \f or <space> ).
// Fifth character should not be a uppercase vowel (A,E,I,O or U).
// Sixth character should not be a . or , symbol.
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