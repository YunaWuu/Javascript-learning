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


 // Random Number Generation； If-Else Conditionals; Comparators & Equality; Combining Comparators
/* Building a Love Calculator */
prompt("What is your name?");
prompt("What is your name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%, You love each other so much!");
} else if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
} else {
  alert("Your love score is " + loveScore + "%, you go together like oil and water.");
}

 /* math.round() function returns the value of a number rounded to the nearest integer.  向上取整
 math.floor() function returns the largest integer less than or equal to a given number. 向下取整 */

 /* === Is equal to
 !== Is not equal to
 && AND
 || OR
 ! NOT */

/* Leap year solution */
/* A year is a leap year if it is evenly divisible by 4;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400. */
function isLeap(year) {
  if (year % 4 === 0){
    if (year % 100 === 0) {
      if (year % 400 === 0) {
      } else {
        return("Not leap year.");
      }
    } else {
      return("Leap year.");
    }
  } else {
    return("Not leap year.");
  }
}

// Array []; Push; pop
// While loop
/* The push() method adds new items to the end of an array.
The pop() method removes the last element of an array. */


/* numbers printed from 1-100;
numbers can be evenly divisible by 3, print "Fizz";
numbers can be evenly divisible by 5, print "Buzz";
numbers can be evenly divisible by both 3 and 5, print "fizzBuzz". */
var output = [];
var count = 1;

function fizzBuzz() {

  while(count <= 100){

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  }
else if (count % 3 === 0) {
    output.push("Fizz");
  }
else if (count % 5 === 0) {
  output.push("Buzz");
}
  else {
    output.push(count);
  }

count++;

}
  return(output);
}


// For Loop: for (i=0; i<2; i++) {}
/* Difference between while loop and for loop,
while (something is true) {} ----- State
for (i=0; i<2; i++) {} ----- Iterate */

/* fibonacci code challenge */
function fibonacciGenerator (n) {

    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0,1];
    }
    else {
        output = [0,1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
// Or another solution
function fibonacciGenerator (n) {

    var sequence = [];

    for(var i=0; i<n; i++){
      if(i<2){
        sequence.push(i);
      }
      else{
        sequence.push(sequence[i-1]+sequence[i-2]);
      }
    }
    return sequence;
}
