function PrimeFactors() {
    // create of() using prototype 
    PrimeFactors.prototype.of = function(n) {
        // create the result array 
        let result = [];
        // check if n > 1
        while(n > 1) {
            // Instead of testing for literals that are prime numbers, set a divisor
            let divisor = 2;
            while(divisor <= n) {
            // Check if n is exactly divisible by the divisor
            while(n % divisor === 0) {
                //push the value onto an array
                result.push(divisor);
                // n = n/divisor;
                n/=divisor;
            } 
                divisor++;
            }
        }
        // return an empty array
        return result;
    };
}

module.exports = new PrimeFactors();