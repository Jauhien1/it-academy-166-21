function deleteItem (array, item){
    const result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === item) {
            continue
        }
        result.push(array[i])
    }
    return result
}

function deleteItem2 (array, item){
    for (let i = 0; i < array.length; i++){
        if (array[i] === item) {
            array.splice(i, 1)
        }

    }
    return array
}
const a = [1, 2, 'asdf', 5];
console.log(deleteItem(a, 2));
console.log(a);
console.log(deleteItem2(a, 2));
console.log(a);