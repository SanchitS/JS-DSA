//Fill in the object constructor with the methods specified in the tests.
//
//Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
//
//All functions that take an argument have an arity of 1, and the argument will be a string.
//
//These methods must be the only available means for interacting with the object.

var Person = function (firstAndLast) {
    var newArr = firstAndLast.split(' ');
    var newStr = newArr.join(" ");

    this.setFirstName = function (first) {
        newArr[0] = first;
        newStr = newArr.join(" ");
    };

    this.setLastName = function (last) {
        newArr[1] = last;
        newStr = newArr.join(" ");
    };

    this.setFullName = function (firstAndLast) {
        newArr = firstAndLast.split(" ");
        newStr = newArr.join(" ");
    };


    this.getFullName = function () {
        return newStr;
    };

    this.getFirstName = function () {
        return newArr[0];
    };

    this.getLastName = function () {
        return newArr[1];
    };
};


var bob = new Person('Bob Ross');
bob.getFullName();