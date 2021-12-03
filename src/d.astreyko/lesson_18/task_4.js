function getLast(array, n) {
    const without = [];
    for (let i = array.length - 1; array.length - n <= i; i--) {
        without.push(array[i]);
    }
    return without.reverse();
}

function getLast2(array, n) {
    const without = [];
    const startIndex = array.length - n;
    for (let i = 0; i < array.length; i++) {
        if (i >= startIndex) {
            without.push(array[i]);
        }
    }
    return without;
}

function getLast3(array, n) {
    const startIndex = array.length - n;
    return array.slice(startIndex, array.length);
    // return array.slice(startIndex);
}

console.log(getLast([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(getLast([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(getLast2([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(getLast2([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(getLast3([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(getLast3([1, 2, 3, 4, 5, 6, 7, 8], 3));