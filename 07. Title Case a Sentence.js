//Return the provided string with the first letter of each word capitalized.
//For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.
//

function titleCase(str) {
    return str.split(" ").map(capitalize).join(" ");
}

function capitalize(text) {
    return text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
}

titleCase("I'm a little tea pot");