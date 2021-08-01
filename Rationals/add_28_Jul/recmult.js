const recsum = require('./recsum')

const recmult = (x, y) => { 
    if (x === 0 || y === 0) return 0
    return recsum(x, recmult(x,y-1))
}
module.exports = recmult