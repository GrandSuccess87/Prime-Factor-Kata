function PrimeFactors() {
    // create of() using prototype 
    PrimeFactors.prototype.of = function(n) {
        // create the result array 
        let result = [];
        // check if n > 1...refactor code to ommit this while loop since for loop starts with divisor = 2 and divisor <=2.
        // while(n > 1) {
            // Instead of testing for literals that are prime numbers, set a divisor
            // set while loops as a for loop
            for(let divisor = 2; divisor <= n; divisor++) {
            // Check if n is exactly divisible by the divisor
            // // n = n/divisor;
            for (; n % divisor === 0; n/=divisor) {
                //push the value onto an array
                result.push(divisor);                
            } 
            }
        // }
        // return an empty array
        return result;
    };
}

module.exports = new PrimeFactors();