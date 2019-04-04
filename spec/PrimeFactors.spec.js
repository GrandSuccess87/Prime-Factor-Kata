const primeFactorsOf = require("../src/PrimeFactors");

describe("Prime Factors", function() {
    it("should calculate the prime factors of an ineger", function() {
        expect(primeFactorsOf(1)).toEqual([]);
    });

    it("factors 2", function()  {
        expect(primeFactorsOf(2)).toEqual([2]);
    });

    it("factors 3", function () {
        expect(primeFactorsOf(3)).toEqual([3]);
    });

    it("factors 4", function () {
        expect(primeFactorsOf(4)).toEqual([2,2]);
    });

    it("factors 5", function () {
        expect(primeFactorsOf(5)).toEqual([5]);
    });

    it("factors 6", function () {
        expect(primeFactorsOf(6)).toEqual([2,3]);
    });

    it("factors 7", function () {
        expect(primeFactorsOf(7)).toEqual([7]);
    });

    it("factors 8", function () {
        expect(primeFactorsOf(8)).toEqual([2,2,2]);
    });

    it("factors 9", function () {
        expect(primeFactorsOf(9)).toEqual([3,3]);
    });

    it("factors 60", function () {
        expect(primeFactorsOf(60)).toEqual([2,2,3,5]);
    });
});