// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


var lastPrimeNumber;
var startPrimeNumber = 2;
var neededNumberOfPrime = 10001; 
var count = 1; /* amount of counted prime numbers */
var m = false; /* this variable will determine if number is prime */

for (var i = startPrimeNumber; count < neededNumberOfPrime; ++i){       /* this loop needed to choose number to check */

  for (var j = 2; j < i; ++j){  /* this loop check if number from first loop is prime; for faster work you can add /2+1 after i; */
         
    if (i%j === 0){
         m = false;
         break;
    }
    
    m = true;
    }

  if (m) {
    ++count;
	}

lastPrimeNumber = i;
}

console.log('10001st prime number is ' + lastPrimeNumber);