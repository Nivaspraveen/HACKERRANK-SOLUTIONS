// The negative lookahead (?!) asserts regex_1 not to be immediately followed by regex_2. Lookahead is excluded from the match (do not consume matches of regex_2), but only assert whether a match is possible or not.

// https://s3.amazonaws.com/hr-challenge-images/14902/1449648778-29c9e8978b-ach23.png

// In the above Image Regex Pattern is matched with the Test String.

// Task

// You have a test String S.
// Write a regex which can match all characters which are not immediately followed by that same character.

// Example

// If S = goooo, then regex should match goooo. Because the first g is not follwed by g and the last o is not followed by o.

// Note

// This is a regex only challenge. You are not required to write a code.
// You have to fill the regex pattern in the blank (_________).

var Regex_Pattern = /(.)(?!\1)/g;	//Do not delete `/` and `/g`.

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