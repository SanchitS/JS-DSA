//Find the missing letter in the passed letter range and return it.
//
//If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    str = str.toLowerCase();
    var num = str.charCodeAt(0);
    for (var i = 0; i < str.length; i++) {
        if ((num + i) != str.charCodeAt(i)) {
            return String.fromCharCode(num + i);
        }
    }
    return undefined;
}





//-------------------------------------------to obtain full complete string
//function fearNotLetter(str) {
//    str = str.toLowerCase();
//    var newArr = str.split("");
//    var num = str.charCodeAt(0);
//    for (var i = 0; i < str.length; i++) {
//        if ((num + i) != str.charCodeAt(i)) {
//            var foo = str.substr(i);
//            str = str.substr(0, i) + String.fromCharCode(num + i) + foo;
//        }
//    }
//    return str;
//}

fearNotLetter('abce');