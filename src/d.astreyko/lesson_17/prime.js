function showPrimes(number) {
    for (let index = 2; index < number; index++) {
        if (isPrime(index)) {
            console.log(index);  // простое
        }
    }
}

function isPrime(number) {
    for (let index = 2; index < number; index++) {
        if ( number % index === 0) return false;
    }
    return true;
}

showPrimes(50)