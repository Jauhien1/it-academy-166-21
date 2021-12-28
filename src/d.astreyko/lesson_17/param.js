function sumTo(number, text) {
    console.log(text);
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

while (true) {
    const num = prompt('number', 0);
    alert(sumTo(Number(num)))
}
