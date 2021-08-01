// https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
// Here is a recursive solution, using the Euclidean algorithm.
// https://www.cse.wustl.edu/~ychen/131/Notes/Recursion/recursion.html

// Recursive:
 var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
 }

 

// Iterative:
function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function egcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }
  
  reduce(2,4);
  // [1,2]
  
  reduce(13427,3413358);
  // [463,117702]

function division(n, b, q = 0) {
    if (n < b) return n, q
    return division(n - b, b, q + 1)
}
    
print(division(274, 5))

// ADDITION of INTEGERS

// program to find the LCM of two integers

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}


// program to find the LCM of two integers

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);

