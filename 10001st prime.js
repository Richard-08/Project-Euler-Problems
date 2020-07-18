/* Project Euler: Problem 7: 10001st primePassed

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
 */

function nthPrime(n) {
  let primes = [2];
  let count = 1;
  for (let i = 2; count <= n - 1; i += 1) {
    if (primes.every(value => i % value !== 0) && i % 2 !== 0) {
      count += 1;
      primes.push(i);
    }
  }
  return primes[primes.length - 1];
}

console.log(nthPrime(10001));