//Convert the given number into a roman numeral.
//
//All roman numerals answers should be provided in upper-case.
function convert(num) {
    var newArr = [];
    var ans = "";
    var newNum = num;
    while (newNum > 0) {
        if (newNum >= 50) {
            newArr.push("L");
            newNum -= 50;
        } else if (newNum >= 40 && newNum < 50) {
            newArr.push("XL");
            newNum -= 40;
        } else if (newNum >= 10 && newNum < 40) {
            newArr.push("X");
            newNum -= 10;
        } else if (newNum == 9) {
            newArr.push("IX");
            newNum -= 9;
        } else if (newNum > 4 && newNum < 10) {
            newArr.push("V");
            newNum -= 5;
        } else if (newNum == 4) {
            newArr.push("IV");
            newNum -= 4;
        } else if (newNum > 0 && newNum < 4) {
            newArr.push("I");
            newNum--;
        }


        ans = newArr.join("");
    }
    return ans;
}

convert(36);