 // Variables Excerises
function test() {
    var a = "3";
    var b = "8";

  /* when the code runs, let the output be a = 8, b = 3 */
var c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);
}

test()


 // String length & Retrieving the Number of characters
/* Tweet character counter, max 140 characters */
var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");


 // Slicing and Extracting Parts of a String
var name = "Yuna";
name.slice(0.2);
/* always count from 0 */
var tweet = prompt("Compose your tweet");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);


 // Changing Casing in Text
var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var restOfName = name.slice(1,name.length);
var capitalisedName = firstChar.toUpperCase + restOfName.toLowerCase;
alert("Hello " + capitalisedName);




 // Function: Parameters & Arguments
function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months remaining in your life.")
}

lifeInWeeks(30);

/* raise a number to a power, (height * height) can be: math.pow(height, 2) */
function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}


 
