function checkConcatenatedSum(number, n) {
    // const result =  String(number).split('')
    //     .map(symbol => Number(symbol.repeat(n)))
    //     .reduce((sum, num) => sum + num)
    // return result === number;

    const str = String(number);
    const array = str.split('');
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const symbol = array[i];
        let repeatedSymbol = ''
        for (let y = 0; y < n; y++) {
            repeatedSymbol += symbol;
        }
        sum += Number(repeatedSymbol)
    }
    return sum === number;
}

console.log(checkConcatenatedSum(198, 2));