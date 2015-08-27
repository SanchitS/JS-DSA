//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
//
//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
//
//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {
    var sum = 1;
    var newArr = [];
    newArr[0] = 0;
    newArr[1] = 1;
    var temp = 0;
    for (var i = 2; newArr[i - 1] <= num; i++) {
        temp = (newArr[i - 1] + newArr[i - 2]);
        newArr[i] = temp;
        if ((temp % 2 != 0) && (newArr[i] <= num)) {
            sum += temp;
        }
        console.log(newArr[i] + "-------" + newArr + "-------" + i + "-------" + sum);

    }
    return sum;
}

sumFibs(1000);