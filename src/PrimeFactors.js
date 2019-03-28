let PrimeFactors = function() {};
// define method of() as a prototypical function that returns an empty array 
PrimeFactors.prototype.of = function (n) {
    // 4 factorial 
    let result = [];
    //refactoring code so we only test n>1 once
        //create a divisor to handle 9
        for (var divisor = 2; divisor <= n; ++divisor ) {
            for(; 0 === n % divisor; n /= divisor) {
                //push n into the result array
                result.push(divisor);
            }
        }  
    return result;
};

module.exports = new PrimeFactors();