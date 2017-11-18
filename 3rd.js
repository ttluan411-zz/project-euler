// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function find_highest_prime_factor(n) {
    var max = Math.round(Math.sqrt(n));
    for(var i = max; i >= 2; i--) {
        if(n % i == 0 && find_highest_prime_factor(i) == 1) {
            return i;
        }
    }
    return 1;
}

var target = 600851475143;
console.log(find_highest_prime_factor(target));