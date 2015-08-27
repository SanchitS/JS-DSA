//Sum all the prime numbers up to and including the provided number.
//
//A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
//
//The provided number may not be a prime.

function sumPrimes(num) {
    var sum = 0;
    for (var j = 2; j <= num; j++)
        if (isPrime(j) === true)
            sum += j;
    return sum;
}

function isPrime(temp) {
    for (var i = 2; i < temp; i++) {
        if (temp % i != 0) {
            continue;
        } else
            return false;
    }
    return true;
}
sumPrimes(10);