let userName = 'Вася';

function showMessage() {
    let userName = 'Oleg'
    let message = 'Привет, ' + userName;

    console.log(message);
}

console.log(userName);
showMessage(); // Привет, Вася
console.log(userName);
showMessage();
