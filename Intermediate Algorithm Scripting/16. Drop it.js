//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

function drop(arr, func) {
    // Drop them elements.
    var ans = 0;
    for (var i = 0; i < arr.length;) {
        if (func(arr[i]) === true) {

            i++;
            continue;
        } else {
            arr.splice(i, 1);
        }
    }
    return arr;
}

drop([1, 2, 3, 4], function (n) {
    return n < 3;
});