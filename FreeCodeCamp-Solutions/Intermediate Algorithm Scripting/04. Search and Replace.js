//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
//First argument is the sentence to perform the search and replace on.
//
//Second argument is the word that you will be replacing (before).
//
//Third argument is what you will be replacing the second argument with (after).
//
//NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

function replace(str, before, after) {
    var newArr = str.split(" ");
    if (before.charAt(0) == before.charAt(0).toUpperCase()) {
        after = after.substr(0, 1).toUpperCase() + after.substr(1).toLowerCase();
    }
    if (newArr.indexOf(before) > -1) {
        newArr.splice(newArr.indexOf(before), 1, after);
        str = newArr.join(" ");
        return str;
    }
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "dog");