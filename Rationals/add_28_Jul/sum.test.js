const sum = require('./sum')
const recsum = require('./recsum')
const recmult = require('./recmult')
const divmod = require('./divmod')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 1000 | 0
        const y = Math.random() * 1000 | 0
        test('random test', () => {

            expect(sum(x, y)).toBe(recsum(x, y))
        })
    }


    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 1000 | 0
        const y = Math.random() * 1000 | 0
        test('random test', () => {

            expect(recmult(x, y)).toBe(x*y)
        })
    }

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * 1000 | 0
        const y = Math.random() * 1000 | 0
        test('random test', () => {
            const [div, mod] = divmod(x, y) 
            const div2 = x / y | 0
            const mod2 = x%y
            expect(div).toBe(div2)
            expect(mod).toBe(mod2)
        })
    }