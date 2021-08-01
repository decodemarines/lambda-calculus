function multiply_frac(a, b) {
    if (a == 0 || b == 0) return 0;
    return 
}


function division(n, b, q = 0) {
    if (n < b) return n, q
    return division(n - b, b, q + 1)
}
    
print(division(274, 5))