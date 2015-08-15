//Remove all falsey values from an array.
//
//Falsey values in javascript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    return arr.filter(filterTheArray);
}

function filterTheArray(newArr) {
    if (newArr == false || newArr == null || newArr == 0 || newArr == undefined || newArr == "")
        return false;
    else
        return true;
    console.log(newArr);
}

bouncer([7, 'ate', '', false, 9]);