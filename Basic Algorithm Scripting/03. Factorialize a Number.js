//----------------------------------------Using recursion
function factorialize(num) {
    this.num = num;
    if (num < 0) {
        console.log("You can't input negative numbers");
    } else if (num > 0) {
        return num * factorialize(num - 1);
    } else
        return 1;
}


//-------------------------------------Alternative Method
//function factorialize(num) {//    this.num = num;
//    var result = 1;
//    if (num < 0) {
//        console.log("You can't input negative numbers");
//    } else {
//        while (num > 0) {
//            result = result * num;
//            num--;
//        }
//        return result;
//    }
//
//}

factorialize(5);
factorialize(10);
factorialize(20);