function getPropertyLength(obj) {
    let counter = 0;
    for (let key in obj) {
        counter++;
    }
    return counter;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let fruits = [
    "Яблоко",
    "Апельсин",
];
let fruits = [
    "Яблоко",
    "Апельсин",
    "Слива",
];
let fruits = [
    "Яблоко",
    "Апельсин",
    "Груша",
];
console.log(getPropertyLength(salaries));
console.log(getPropertyLength({nane:2}));
console.log(getPropertyLength({}));