const {repair} = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({durability: 89}).durability).toBe(100);
            expect(repair({durability: 50}).durability).toBe(100);
            expect(repair({durability: 100})).toEqual({ durability: 100 });
        })
    })
})