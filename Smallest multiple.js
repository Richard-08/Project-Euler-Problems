/* 

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
 */

function gcd(x, y) {
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function smallestMult(n) {
    let max = n;

    for (let i = 1; i <= n; i += 1) {
        max = (max * i) / gcd(max, i);

    }
    return max;
}

console.log(smallestMult(5));