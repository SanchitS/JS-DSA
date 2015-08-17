//Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            console.log(arr[i] + "dddddddddddddddd");
            steamroller(arr[i]);
        } else {
            console.log(arr[i]);
            return newArr.push(arr[i]);

        }
    }
    return newArr;

}
steamroller([1, [2], [3, [[4]]]]);

function steamroller(arr) {
    return arr.reduce(function (final, temp) {
        return final.concat((Array.isArray(temp)) ? steamroller(temp) : temp);
    }, []);
}

steamroller([1, [2], [3, [[4]]]]);