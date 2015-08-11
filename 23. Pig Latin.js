//Translate the provided string to pig latin.
//
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
//If a word begins with a vowel you just add "way" to the end.

function translate(str) {
    str = str.toLowerCase();
    var newArr = str.split("");
    var suffix = [];
    var pos = 0;
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] == 'a' || newArr[i] == 'e' || newArr[i] == 'i' || newArr[i] == 'o' || newArr[i] == 'u') {
            console.log("continue");
            pos = i;
            break;

        }
    }
    if (pos > 0) {
        suffix = newArr.slice(0, pos);
        console.log(suffix + "----" + pos + "----" + newArr + "----" + str);
        suffix.push("a");
        suffix.push("y");
        console.log(suffix + "----" + pos + "----" + newArr + "----" + str);
        newArr = newArr.splice(pos, newArr.length);
        console.log(suffix + "----" + pos + "----" + newArr + "----" + str);
        newArr = newArr.join("");
        suffix = suffix.join("");
        str = newArr + suffix;
        return str;
    } else {
        str = newArr.join("");
        str += "way";
        return str;
    }
}

translate("consonant");