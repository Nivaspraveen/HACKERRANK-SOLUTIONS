// \b

// \b assert position at a word boundary.

// Three different positions qualify for word boundaries :
// ► Before the first character in the string, if the first character is a word character.
// ► Between two characters in the string, where one is a word character and the other is not a word character.
// ► After the last character in the string, if the last character is a word character.

// https://s3.amazonaws.com/hr-challenge-images/14619/1449645203-491495c368-ach15.png

// In the above image Regex Pattern is matched with the Test String.

// Task

// You have a test String S.
// Your task is to write a regex which will match word starting with vowel (a,e,i,o, u, A, E, I , O or U).
// The matched word can be of any length. The matched word should consist of letters (lowercase and uppercase both) only.
// The matched word must start and end with a word boundary.

// Note

// This is a regex only challenge. You are not required to write a code.
// You have to fill the regex pattern in the blank (_________).

var Regex_Pattern = /\b[aeiouAEIOU][a-zA-Z]*\b|[aeiouAEIOU][a-zA-Z]*$/; //Do not delete '/'. Replace __________ with your regex.

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