function reverseString(str) {
    this.str = str;
    var newArr = str.split("");
    var newStr = [];
    for (var i = newArr.length - 1; i >= 0; i--) {
        newStr.push(newArr[i]);
    }
    str = newStr.join("");
    return str;
}

reverseString('hello');