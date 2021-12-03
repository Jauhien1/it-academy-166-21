function filterFalsy (arr) {
    const result = [];
    for (let item of arr) {
        if (!!item) {
            result.push(item);
        }
    }
    return result;
}

console.log(filterFalsy([0, 5, false, undefined, null, 4, 56454, -0, +0, NaN, ""]));