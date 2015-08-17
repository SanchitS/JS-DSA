//Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
    if (str.substr(str.length - target.length, target.length) == target)
        return true;
    else
        return false;
}

end('Bastian', 'n');