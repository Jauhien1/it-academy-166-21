const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

function getWeekDay(date) {
    return days[date.getDay()];
}

console.log(getWeekDay(new Date()));
console.log(getWeekDay(new Date(2021, 11, 23)));
console.log(getWeekDay(new Date(2021)));

function getMonthDays(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getMonthDays2(year, month) {
    const nextMonthDay = new Date(year, month + 1);
    const currentMonthDay = new Date(year, month);
    const difference = nextMonthDay - currentMonthDay;
    return difference / (24 * 3600 * 1000);
}

console.log(getMonthDays(2021, 11));
console.log(getMonthDays(2021, 10));
console.log(getMonthDays(2021, 1));

console.log(getMonthDays2(2021, 11));
console.log(getMonthDays2(2021, 10));
console.log(getMonthDays2(2021, 1));