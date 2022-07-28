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

// Array []; Push; pop
// While loop
/* The push() method adds new items to the end of an array.
The pop() method removes the last element of an array. */
