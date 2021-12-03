function sum(obj) {
    let result = 0;
    for (let key in obj) {
        result = result + obj[key]
    }
    return result;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(sum(salaries));