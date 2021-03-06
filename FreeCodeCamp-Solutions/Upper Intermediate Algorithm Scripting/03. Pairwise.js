//Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.
//
//For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.
//
//pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

function pairwise(arr, arg) {
    var newArr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == arg && newArr.indexOf(i) < 0 && newArr.indexOf(j) < 0) {
                newArr.push(i);
                newArr.push(j);
                count += (i + j);
                break;
            }
        }
    }
    return count;
}

pairwise([1, 4, 2, 3, 0, 5], 7);