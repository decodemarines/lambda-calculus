const pred = require('./pred')
const succ = require('./succ')

function recsum(x, y) { 
    if (x === 0) return y
    if (y === 0) return x 
    return recsum( pred (x), succ (y))
}
module.exports = recsum