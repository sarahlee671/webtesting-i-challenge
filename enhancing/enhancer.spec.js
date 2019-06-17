const {repair, succeed} = require('./enhancer.js');

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores items durability to 100', () => {
            expect(repair({durability: 89}).durability).toBe(100);
            expect(repair({durability: 50}).durability).toBe(100);
            expect(repair({durability: 100})).toEqual({ durability: 100 });
        })
    })
    describe('success()', () => {
        it('should increase the items enhancement by 1', () => {
            expect(succeed({enhancement: 1}).enhancement).toBe(2);
            expect(succeed({enhancement: 20}).enhancement).toBe(20);
            expect(succeed({enhancement: 19}).enhancement).toBe(20);
        })
    })
})