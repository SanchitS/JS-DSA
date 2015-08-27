function palindrome(str) {
    str = str.toLowerCase().replace(/[!@#$%^&*()_+-=,.';  {}:"<>]/g, "");;
    var newArr = str.split("");
    var newStr = [];
    for (var i = newArr.length - 1; i >= 0; i--) {
        newStr.push(newArr[i]);
    }
    newStr = newStr.join("");
    if (str === newStr)
        return true;
    else
        return false;
}

palindrome("eye");