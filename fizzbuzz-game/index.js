/* FizzBuzz game
numbers printed from 1-100;
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
