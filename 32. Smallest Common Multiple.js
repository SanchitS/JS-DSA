//Find the smallest number that is evenly divisible by all numbers in the provided range.
//
//The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
    var temp = 1;
    var LCM = 1;
    if (arr[0] > arr[1]) {
        var a = arr[1];
        arr[1] = arr[0];
        arr[0] = a;
    }
    for (var i = arr[0]; i <= arr[1]; i++)
        temp *= i;
    for (var j = arr[1]; j < temp; j++) {
        if (isFactor(j, arr[0], arr[1]) == true) {
            LCM = j;
            break;
        }
    }
    return LCM;
}

function isFactor(num, x, y) {
    for (var i = x; i <= y; i++) {
        if (num % i == 0)
            continue;
        else
            return false;
    }
    return true;
}

smallestCommons([1, 5]);