// divmod_rec = λ r a b q . ˂ a b (pair q a) (r (- a b) b (+1 q))

// function division(n, b, q = 0) {
//     if (n < b) return n, q
//     return division(n - b, b, q + 1)
// }
    
// print(division(274, 5))

function divmod(a,b,q=0) { 
    return a < b ? [q,a]:divmod(a-b,b,q+1)
}
module.exports = divmod