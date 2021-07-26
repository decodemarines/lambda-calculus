// Define a function n!=n(n-1)...1
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function fac(n) { 
    if (n === 0) return 1
    return n * fac(n-1)
}

