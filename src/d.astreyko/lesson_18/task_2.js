function filterEven (array){
    const evenArray=[]

    for (let i=0; i<array.length;i++){
        const number=array[i]
        if (number %2===0){
        evenArray.push(number)
        }
    }
    return evenArray
}

console.log(filterEven([15, 20, 25]));
console.log(filterEven([30, 35, 40]));