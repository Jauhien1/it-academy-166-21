function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
}
console.log(getRandomElement([10, 20, 50, 12, 15] ))

// let s = ''
// for (let i = 0; i < 100; i++) {
//     s += ' ' + Math.floor(Math.random() * 5)
// }
// console.log(s);