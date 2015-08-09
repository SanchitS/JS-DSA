//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
    var newArr = [];
    if (howMany <= arr.length) {
        for (var i = 0; i < arr.length - howMany; i++) {
            newArr[i] = arr[i + howMany];
        }
        return newArr;
    } else
        return newArr;
}

slasher([1, 2, 3], 2);