// let user = {};
// user.name = 'oleg';
// user.surname = 'oleg2'
// user.name = 'ivan';
// console.log(user);
// delete user.name;
// console.log(user);

let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    "+1": "США",
    "+375": "Беларусь"
};

for (let key in codes) {
    console.log(key , codes[key]);
}

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true
}

console.log(isEmpty({}));
console.log(isEmpty({name:'name'}));