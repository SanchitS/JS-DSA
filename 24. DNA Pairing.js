//The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.
//
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
//Return the provided character as the first element in each array.

function pair(str) {
    var newArr = str.toUpperCase().split("");

    var resultDNA = [];
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] == 'A') {
            resultDNA.push(['A', 'T']);
        } else if (newArr[i] == 'T') {
            resultDNA.push(['T', 'A']);
        } else if (newArr[i] == 'G') {
            resultDNA.push(['G', 'C']);
        } else if (newArr[i] == 'C') {
            resultDNA.push(['C', 'G']);
        }
    }
    return resultDNA;

}

pair("GACTG");