const primeFactors = require("../src/PrimeFactors");

describe("Prime Factors", function() {
    it("should calculate the prime factors of an ineger", function() {
        expect(primeFactorsOf(1)).toEqual([]);
    });

    it("factors 2", function()  {
        expect(primeFactorsOf(2)).toEqual([2]);
        expect(primeFactorsOf(3)).toEqual([3]);
        expect(primeFactors.Of(4)).toEqual([2,2]);
        expect(primeFactors.Of(5)).toEqual([5]);
        expect(primeFactors.Of(6)).toEqual([2,3]);
        expect(primeFactors.Of(7)).toEqual([7]);
        expect(primeFactors.Of(8)).toEqual([2,2,2]);
        expect(primeFactors.Of(9)).toEqual([3,3]);
        expect(primeFactors.Of(60)).toEqual([2,2,3,5]);

    });
});