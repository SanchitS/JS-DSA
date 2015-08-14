//Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.
//
//For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5
//
//If either argument isn't a valid number, return undefined.

function add() {
    var args = arguments.length;
    var first = arguments[0];
    var second = arguments[1];
    if (args !== 2) {
        if (typeof first != "number")
            return undefined;
        else
            return function (a) {
                if (typeof (a) !== "number")
                    return undefined;
                else
                    return (a + first);
            }
    } else if (args == 2) {
        if (typeof first !== "number" || typeof second !== "number")
            return undefined;
        else
            return first + second;
    }

}
add(2, 3);