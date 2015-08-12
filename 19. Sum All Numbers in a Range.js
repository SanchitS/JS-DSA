//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
//The lowest number will not always come first.

function sumAll(arr) {
    var sum = 0;
    if (arr[0] < arr[1]) {
        for (var i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
    } else {
        for (var j = arr[0]; j >= arr[1]; j--)
            sum += j;
    }
    return sum;
}

sumAll([1, 4]);