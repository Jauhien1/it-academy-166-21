function join (array){
    let result = '';
    // return array.join('')
    // return array.toString().replaceAll(',', '')
    // for (let item of array){
    //    result  += item
    // }
    for (let i = 0; i< array.length; i++){
        result += array[i]
    }
    return result
}

console.log(join(['cat', 'dog', 'pig']));