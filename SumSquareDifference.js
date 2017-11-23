// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.



function problem6(n) {
    let sum = 0, totalSquares = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
        totalSquares += Math.pow(i, 2);
    }

    return Math.pow(sum, 2) - totalSquares;
}