//A better way to multiply two n - digit numbers with a recursive method.
//
//link - https: //en.wikipedia.org/wiki/Karatsuba_algorithm
//
//PSEUDOCODE:
//procedure karatsuba(num1, num2)
//  if (num1 < 10) or (num2 < 10)
//    return num1*num2
//  /* calculates the size of the numbers */
//  m = max(size_base10(num1), size_base10(num2))
//  m2 = m/2
//  /* split the digit sequences about the middle */
//  high1, low1 = split_at(num1, m2)
//  high2, low2 = split_at(num2, m2)
//  /* 3 calls made to numbers approximately half the size */
//  z0 = karatsuba(low1,low2)
//  z1 = karatsuba((low1+high1),(low2+high2))
//  z2 = karatsuba(high1,high2)
//  return (z2*10^(2*m2))+((z1-z2-z0)*10^(m2))+(z0)

function karatsuba(num1, num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();
    var m, m2;

    if (num1 < 10 || num2 < 10)
        return num1 * num2;

    if (str1.length >= str2.length)
        m = str1.length;
    else
        m = str2.length;
    m2 = parseInt(m / 2);
    var high1 = parseInt(str1.substring(0, str1.length - m2));
    var low1 = parseInt(str1.substring((str1.length - m2), str1.length));
    var high2 = parseInt(str2.substring(0, str2.length - m2));
    var low2 = parseInt(str2.substring((str2.length - m2), str2.length));
    var z0 = karatsuba(low1, low2);
    var z1 = karatsuba((low1 + high1), (low2 + high2));
    var z2 = karatsuba(high1, high2);
    var result = ((z2 * Math.pow(10, (2 * m2))) + ((z1 - z2 - z0) * Math.pow(10, m2)) + z0);
    return result;

}
console.log(karatsuba(56789734, 1234008));