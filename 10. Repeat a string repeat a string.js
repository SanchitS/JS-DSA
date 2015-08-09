//Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
    // repeat after me
    var newStr = "";
    if (num < 1)
        return newStr;
    else {
        for (i = 0; i < num; i++)
            newStr = newStr.concat(str);
        return newStr;
    }
}

repeat('abc', 3);