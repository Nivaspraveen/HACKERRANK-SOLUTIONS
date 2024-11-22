// regex_1(?=regex_2)
// The positive lookahead (?=) asserts regex_1 to be immediately followed by regex_2. 
// The lookahead is excluded from the match. It does not return matches of regex_2. The lookahead only asserts whether a match is possible or not.

// https://s3.amazonaws.com/hr-challenge-images/14901/1449648674-e67416e4d0-ach22.png

// In the above Image, the Regex Pattern is matched with the Test String.

// Task

// You have a test string S.
// Write a regex that can match all occurrences of o followed immediately by oo in S.

// Note

// This is a regex only challenge. You are not required to write code.
// You have to fill the regex pattern in the blank (_________).

var Regex_Pattern = /o(?=oo)/g;	//Do not delete `/` and `/g`.

function processData(Test_String) {
    //Enter your code here
    var Array = Test_String.match(Regex_Pattern);
    console.log("Number of matches :", Array.length);
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