const {repair, succeed, fail, get} = require('./enhancer.js');

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
            expect(succeed({enhancement: 0}).enhancement).toBe(1);
        })
    })
    describe('fail()', () => {
        it('should decrease durability by 5', () => {
            expect(fail({enhancement: 10, durability: 20}).durability).toBe(15)
        })

        it('should decrease durability by 10', () => {
            expect(fail({enhancement: 15, durability: 50}).durability).toBe(40)
        })

        it('should decrease durability by 10 and decrease enhancement by 1', () => {
            expect(fail({enhancement: 18, durability: 40})).toEqual({enhancement: 17, durability: 30})
        })
    })
    describe('get()', () => {
        it('should return name with the new name properties', () => {
            expect(get({enhancement: 5, name: 'sarah'}).name).toBe('[+5] sarah')
        })
    })
})
