function get2params() {
    // return [1, '23'];
    return {
        min: 1,
        max: 2,
    }
}

const results = get2params();
const min = results.min;
const text = results.max;

// const [sum, text] = get2params();
const {min, max} = get2params();

console.log(sum);
console.log(text);