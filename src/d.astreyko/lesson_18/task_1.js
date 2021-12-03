function generateNumbers(n) {
    const array = new Array(n);
    for (let i = 1; i <= n; i++) {
        array[i - 1] = i;
    }
    return array;
}

console.log(generateNumbers(10));