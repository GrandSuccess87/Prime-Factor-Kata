function PrimeFactors() {
    // create of() using prototype 
    PrimeFactors.prototype.of = function(n) {
        // create the result array 
        let result = [];
        // check if n > 1
        while(n > 1) {
            // In order to check the prime factors of 4, need to make sure n is divisible by 2.
            if(n % 2 === 0) {
                //push the value onto an array
                result.push(2);
                n = n/2;
            }
            else {
                result.push(n);
                // End the while loop
                break;
            }
        }
        // return an empty array
        return result;
    };
}

module.exports = new PrimeFactors();