//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.
//
//Note that the three dots at the end add to the string length.

function truncate(str, num) {
    // Clear out that junk in your trunk
    var newStr = "";
    if (num < str.length) {
        newStr = str.slice(0, num - 3);
        return newStr + "...";
    } else if (num = str.length)
        return str;

}

truncate('A-tisket a-tasket A green and yellow basket', 11);