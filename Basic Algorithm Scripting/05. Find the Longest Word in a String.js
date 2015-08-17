function findLongestWord(str) {
    var newArr = str.split(" ");
    var max = 0;
    for (var i in newArr) {
        if (newArr[i].length > max) {
            max = newArr[i].length;
        }
    }
    return max;
}

findLongestWord('The quick brown fox jumped over the lazy dog');