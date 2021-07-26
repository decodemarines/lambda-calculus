function triangular(n) { 
    if (n === 0) return 0
    console.log(`${n}+${triangular(n-1)}`)
    return n+(triangular(n-1))
}
triangular(3)
// 1+0
// 2+1
// 1+0
// 3+3
// 1+0
// 2+1
// 1+0
// 6

// for negative and 0
var triangular = function (value) {
    var abs = Math.abs(value);
    return ((abs / 2) * (abs + 1)) * (abs / value) || 0;
};

// Testing code.
var testTriangular = function () {
    var testTriangularValue = function (arg, value, id) {
        console.log(triangular(arg) === value ? "Test " + id + " passed." : "Test " + id + " failed.");
    };

    testTriangularValue(3, 6, 1);
    testTriangularValue(-3, -6, 2);
    testTriangularValue(0, 0, 3);
    testTriangularValue(4, 10, 4);
    testTriangularValue("hello", 0, 5);
};