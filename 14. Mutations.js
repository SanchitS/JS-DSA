//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
//For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.
//
//The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.
//
//Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

function mutation(arr) {
    var first = arr[0].toLowerCase();
    var second = arr[1].toLowerCase();
    var newArr = [];
    for (var i = 0; i < arr[1].length; i++) {
        newArr[i] = (first.indexOf(second[i]));
    }
    if (newArr.join("").indexOf("-1") >= 0) {
        return false;
    } else
        return true;
}

mutation(['hello', 'Hey']);