// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?	

function isDivisibleBy(number, divisor) {
    return number % divisor == 0;
}

function multiples() {
    let found = false;
    let number = 1;
    while (!found) {
        for (let i = 2; i < 20; i++) {
            if (isDivisibleBy(number, i)) {
                continue;
            } else {
                number++;
                i = 2;
            }
        }
        found = true;
    }
    return number;
}