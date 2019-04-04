const PrimeFactors = function () {};

PrimeFactors.prototype.of = function (n) {
    let results = [];
    while(n > 1) {
        // if(n <= divisor) {}
        if(0 === n % 2) {
            results.push(2);
            n /= 2;
        } else if (0 === n % 3) {
            results.push(3);
            n /= 3;
        } 
        else {
            results.push(n);
            break;
        }
        
    }
    return results;
};

module.exports = new PrimeFactors ();