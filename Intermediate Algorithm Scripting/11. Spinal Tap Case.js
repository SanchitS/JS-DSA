//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " " || str[i] == "_" || str[i] == ".") {
            str = str.replace(str[i], "-");
        } else if (str[i] != " ")
            count++;
    }
    if (count == str.length) {
        for (var j = 0; j < str.length; j++) {
            if (str.charAt(j) == str.charAt(j).toUpperCase()) {
                str = str.replace(str.charAt(j), ("-" + str.charAt(j).toLowerCase()));
            }
        }
    }
    return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');