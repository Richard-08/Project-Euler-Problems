function largestPalindromeProduct(n) {
    const max = parseInt(Array(n).fill(9).join(''));
    const min = (max + 1) / 10;
    let result = [];

    for (let i = max; i >= min; i -= 1) {
        for (let j = max; j >= min; j -= 1) {
            let num = i * j;
            let numReverse = String(num).split('').reverse('').join('');

            if (num == numReverse) {
                result.push(num);
                break;
            }
        }
    }
    return Math.max(...result);
}

console.log(largestPalindromeProduct(3));
